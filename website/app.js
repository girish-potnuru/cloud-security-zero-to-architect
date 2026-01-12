// ========================================
// Azure Security Learning Hub - App Logic
// ========================================

class LearningHub {
    constructor() {
        this.state = this.loadState();
        this.currentWeek = 1;
        this.currentResourceTab = 'courses';
        this.init();
    }

    // Load state from localStorage
    loadState() {
        const saved = localStorage.getItem('azureSecurityHub');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            completedActivities: {},
            completedDays: [],
            completedLabs: {},
            certifications: {},
            startDate: new Date().toISOString(),
            streak: 0,
            lastVisit: null
        };
    }

    // Save state to localStorage
    saveState() {
        localStorage.setItem('azureSecurityHub', JSON.stringify(this.state));
    }

    // Initialize the app
    init() {
        this.updateStreak();
        this.bindEvents();
        this.renderDashboard();
        this.renderSchedule(1);
        this.renderLabs();
        this.renderProject();
        this.renderResources('courses');
        this.renderQuickRef();
        this.updateStats();
    }

    // Update streak
    updateStreak() {
        const today = new Date().toDateString();
        const lastVisit = this.state.lastVisit;
        
        if (lastVisit) {
            const lastDate = new Date(lastVisit).toDateString();
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            
            if (lastDate === today) {
                // Same day, no change
            } else if (lastDate === yesterday) {
                // Consecutive day
                this.state.streak++;
            } else {
                // Streak broken
                this.state.streak = 1;
            }
        } else {
            this.state.streak = 1;
        }
        
        this.state.lastVisit = today;
        this.saveState();
    }

    // Bind event listeners
    bindEvents() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.dataset.section;
                this.navigateTo(section);
            });
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const icon = document.querySelector('.theme-icon');
            icon.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
            localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
        });

        // Load saved theme
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-theme');
            document.querySelector('.theme-icon').textContent = '☀️';
        }

        // Week selector
        document.querySelectorAll('.week-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const week = parseInt(e.target.dataset.week);
                this.renderSchedule(week);
            });
        });

        // Resource tabs
        document.querySelectorAll('.resource-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = e.target.dataset.tab;
                this.renderResources(tabName);
            });
        });

        // Sidebar toggle
        document.getElementById('sidebarToggle').addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });

        // Certification checkboxes
        document.querySelectorAll('.cert-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const cert = e.target.id.replace('cert-', '');
                this.state.certifications[cert] = e.target.checked;
                this.saveState();
                this.updateStats();
                if (e.target.checked) {
                    this.showToast(`🎉 Congratulations on passing ${cert.toUpperCase()}!`, 'success');
                }
            });

            // Load saved state
            const cert = checkbox.id.replace('cert-', '');
            if (this.state.certifications[cert]) {
                checkbox.checked = true;
            }
        });
    }

    // Navigate to section
    navigateTo(section) {
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        document.getElementById(section).classList.add('active');
        document.querySelector(`[data-section="${section}"]`).classList.add('active');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Calculate current day based on start date
    getCurrentDay() {
        const start = new Date(this.state.startDate);
        const now = new Date();
        const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
        return Math.min(Math.max(diff + 1, 1), 112); // 16 weeks = 112 days
    }

    // Calculate overall progress
    getProgress() {
        const totalActivities = this.getTotalActivities();
        const completed = Object.keys(this.state.completedActivities).length;
        return Math.round((completed / totalActivities) * 100);
    }

    // Get total number of activities
    getTotalActivities() {
        let total = 0;
        Object.values(SCHEDULE_DATA).forEach(week => {
            week.days.forEach(day => {
                total += day.activities.length;
            });
        });
        return total;
    }

    // Update stats display
    updateStats() {
        const currentDay = this.getCurrentDay();
        const progress = this.getProgress();
        const completed = Object.keys(this.state.completedActivities).length;

        document.getElementById('currentDay').textContent = `Day ${currentDay}`;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('streak').textContent = this.state.streak;
        document.getElementById('progress').textContent = `${progress}%`;
        document.getElementById('progressBar').style.width = `${progress}%`;

        // Update phase indicators (6 phases for 12 weeks)
        const currentWeek = Math.ceil(currentDay / 7);
        document.querySelectorAll('.phase').forEach((phase, i) => {
            const phaseWeek = (i + 1) * 2; // Each phase is 2 weeks
            if (currentWeek > phaseWeek) {
                phase.classList.add('completed');
                phase.classList.remove('active');
            } else if (currentWeek > phaseWeek - 2) {
                phase.classList.add('active');
                phase.classList.remove('completed');
            } else {
                phase.classList.remove('completed', 'active');
            }
        });

        // Update week buttons
        document.querySelectorAll('.week-btn').forEach(btn => {
            const week = parseInt(btn.dataset.week);
            const weekCompleted = this.isWeekCompleted(week);
            btn.classList.toggle('completed', weekCompleted);
        });
    }

    // Check if week is completed
    isWeekCompleted(week) {
        const weekData = SCHEDULE_DATA[week];
        if (!weekData) return false;

        for (const day of weekData.days) {
            for (let i = 0; i < day.activities.length; i++) {
                const key = `${day.day}-${i}`;
                if (!this.state.completedActivities[key]) {
                    return false;
                }
            }
        }
        return true;
    }

    // Check if day is completed
    isDayCompleted(dayNum) {
        // Find the day in schedule
        for (const week of Object.values(SCHEDULE_DATA)) {
            const day = week.days.find(d => d.day === dayNum);
            if (day) {
                for (let i = 0; i < day.activities.length; i++) {
                    const key = `${dayNum}-${i}`;
                    if (!this.state.completedActivities[key]) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }

    // Render dashboard
    renderDashboard() {
        const currentDay = this.getCurrentDay();
        const todayContent = document.getElementById('todayContent');
        
        // Find today's activities
        let todayData = null;
        for (const week of Object.values(SCHEDULE_DATA)) {
            const day = week.days.find(d => d.day === currentDay);
            if (day) {
                todayData = day;
                break;
            }
        }

        if (todayData) {
            todayContent.innerHTML = `
                <div class="today-header">
                    <h3>Day ${todayData.day}: ${todayData.title}</h3>
                    <p>${todayData.subtitle}</p>
                </div>
                ${todayData.activities.map((activity, i) => {
                    const key = `${todayData.day}-${i}`;
                    const isCompleted = this.state.completedActivities[key];
                    return `
                        <div class="today-task ${isCompleted ? 'completed' : ''}">
                            <input type="checkbox" class="task-checkbox" 
                                   data-day="${todayData.day}" data-index="${i}"
                                   ${isCompleted ? 'checked' : ''}>
                            <div class="task-content">
                                <div class="task-title">${activity.title}</div>
                                <div class="task-meta">${activity.description}</div>
                            </div>
                            <span class="task-time">⏱️ ${activity.time}</span>
                        </div>
                    `;
                }).join('')}
            `;

            // Bind task checkboxes
            todayContent.querySelectorAll('.task-checkbox').forEach(checkbox => {
                checkbox.addEventListener('change', (e) => {
                    const day = e.target.dataset.day;
                    const index = e.target.dataset.index;
                    this.toggleActivity(day, index);
                });
            });
        }
    }

    // Render schedule for a week
    renderSchedule(week) {
        this.currentWeek = week;
        const weekData = SCHEDULE_DATA[week];
        const scheduleContent = document.getElementById('scheduleContent');

        // Update active week button
        document.querySelectorAll('.week-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.week) === week);
        });

        if (!weekData) {
            scheduleContent.innerHTML = '<p>No data available for this week.</p>';
            return;
        }

        scheduleContent.innerHTML = `
            <div class="week-header">
                <h2>Week ${week}: ${weekData.theme}</h2>
            </div>
            ${weekData.days.map(day => {
                const dayCompleted = this.isDayCompleted(day.day);
                return `
                    <div class="day-card ${dayCompleted ? 'completed' : ''}" data-day="${day.day}">
                        <div class="day-header">
                            <div class="day-info">
                                <div class="day-number">${day.day}</div>
                                <div>
                                    <div class="day-title">${day.title}</div>
                                    <div class="day-subtitle">${day.subtitle}</div>
                                </div>
                            </div>
                            <div class="day-status">
                                <span class="status-badge ${dayCompleted ? 'completed' : 'pending'}">
                                    ${dayCompleted ? '✓ Completed' : 'Pending'}
                                </span>
                                <span class="expand-icon">▼</span>
                            </div>
                        </div>
                        <div class="day-content">
                            <div class="activity-list">
                                ${day.activities.map((activity, i) => {
                                    const key = `${day.day}-${i}`;
                                    const isCompleted = this.state.completedActivities[key];
                                    return `
                                        <div class="activity">
                                            <input type="checkbox" class="activity-checkbox" 
                                                   data-day="${day.day}" data-index="${i}"
                                                   ${isCompleted ? 'checked' : ''}>
                                            <div class="activity-details">
                                                <div class="activity-title">${activity.title}</div>
                                                <div class="activity-description">
                                                    ${activity.description}
                                                    ${activity.link ? `<a href="${activity.link}" target="_blank" class="activity-link">Open Resource →</a>` : ''}
                                                </div>
                                            </div>
                                            <span class="activity-duration">${activity.time}</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        `;

        // Bind day card expansion
        scheduleContent.querySelectorAll('.day-header').forEach(header => {
            header.addEventListener('click', (e) => {
                if (!e.target.classList.contains('activity-checkbox')) {
                    const card = header.closest('.day-card');
                    card.classList.toggle('expanded');
                }
            });
        });

        // Bind activity checkboxes
        scheduleContent.querySelectorAll('.activity-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                e.stopPropagation();
                const day = e.target.dataset.day;
                const index = e.target.dataset.index;
                this.toggleActivity(day, index);
            });
        });
    }

    // Toggle activity completion
    toggleActivity(day, index) {
        const key = `${day}-${index}`;
        if (this.state.completedActivities[key]) {
            delete this.state.completedActivities[key];
        } else {
            this.state.completedActivities[key] = true;
            this.showToast('✅ Task completed!', 'success');
        }
        this.saveState();
        this.updateStats();
        this.renderDashboard();
        this.renderSchedule(this.currentWeek);
    }

    // Render labs
    renderLabs() {
        const labsGrid = document.getElementById('labsGrid');
        
        labsGrid.innerHTML = LABS_DATA.map(lab => {
            const progress = this.getLabProgress(lab.id);
            return `
                <div class="lab-card" data-lab="${lab.id}">
                    <div class="lab-header" style="background: ${this.getLabGradient(lab.id)}">
                        <div class="lab-number">Lab ${lab.id}</div>
                        <div class="lab-title">${lab.title}</div>
                    </div>
                    <div class="lab-body">
                        <p class="lab-description">${lab.description}</p>
                        <div class="lab-topics">
                            ${lab.topics.map(topic => `<span class="lab-topic">${topic}</span>`).join('')}
                        </div>
                        <div class="lab-meta">
                            <span class="lab-duration">⏱️ ${lab.duration} | Week ${lab.week}</span>
                            <div class="lab-progress">
                                <span>${progress}%</span>
                                <div class="lab-progress-bar">
                                    <div class="lab-progress-fill" style="width: ${progress}%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Get lab gradient color
    getLabGradient(labId) {
        const gradients = [
            'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
            'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
            'linear-gradient(135deg, #10b981 0%, #00d4ff 100%)',
            'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
            'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
        ];
        return gradients[(labId - 1) % gradients.length];
    }

    // Get lab progress (based on related week activities)
    getLabProgress(labId) {
        const lab = LABS_DATA.find(l => l.id === labId);
        if (!lab) return 0;
        
        // Check if the lab day is completed
        const labDays = {
            1: 21, 2: 28, 3: 42, 4: 49, 5: 48
        };
        
        if (this.state.completedLabs && this.state.completedLabs[labId]) {
            return 100;
        }
        
        // Check related activities
        const week = lab.week;
        const weekData = SCHEDULE_DATA[week];
        if (!weekData) return 0;
        
        let total = 0;
        let completed = 0;
        weekData.days.forEach(day => {
            day.activities.forEach((_, i) => {
                total++;
                if (this.state.completedActivities[`${day.day}-${i}`]) {
                    completed++;
                }
            });
        });
        
        return total > 0 ? Math.round((completed / total) * 100) : 0;
    }

    // Render project
    renderProject() {
        const projectContent = document.getElementById('projectContent');
        
        projectContent.innerHTML = `
            <div class="project-overview">
                <h2>${PROJECT_DATA.title}</h2>
                <p>${PROJECT_DATA.description}</p>
                
                <div class="architecture-diagram">
┌─────────────────────────────────────────────────────────────────┐
│                         INTERNET                                 │
└─────────────────────────────┬───────────────────────────────────┘
                              │
┌─────────────────────────────▼───────────────────────────────────┐
│                   Azure Front Door (WAF)                         │
└─────────────────────────────┬───────────────────────────────────┘
                              │
┌─────────────────────────────┴───────────────────────────────────┐
│                      HUB VNET (10.0.0.0/16)                      │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                 │
│  │  Firewall  │  │  Bastion   │  │ VPN Gateway│                 │
│  └─────┬──────┘  └────────────┘  └────────────┘                 │
└────────┼────────────────────────────────────────────────────────┘
         │ VNet Peering
┌────────┴────────────────────────────────────────────────────────┐
│                    SPOKE VNET (10.1.0.0/16)                      │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐                   │
│  │ Web Tier │───►│ App Tier │───►│Data Tier │                   │
│  └──────────┘    └──────────┘    └──────────┘                   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Private Endpoints                            │   │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐            │   │
│  │  │ OpenAI │ │Key Vault│ │Storage │ │ SQL DB │            │   │
│  │  └────────┘ └────────┘ └────────┘ └────────┘            │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                </div>
            </div>
            
            <h3>Project Phases</h3>
            <div class="project-phases">
                ${PROJECT_DATA.phases.map(phase => `
                    <div class="project-phase">
                        <div class="phase-header">
                            <span class="phase-number">${phase.number}</span>
                            <span class="phase-title">${phase.title}</span>
                            <span class="phase-duration">${phase.duration}</span>
                        </div>
                        <div class="phase-tasks">
                            ${phase.tasks.map(task => `
                                <div class="phase-task">${task}</div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Render resources
    renderResources(tab) {
        this.currentResourceTab = tab;
        const resourcesContent = document.getElementById('resourcesContent');
        const resources = RESOURCES_DATA[tab] || [];

        // Update active tab
        document.querySelectorAll('.resource-tab').forEach(t => {
            t.classList.toggle('active', t.dataset.tab === tab);
        });

        resourcesContent.innerHTML = resources.map(resource => `
            <div class="resource-card">
                <div class="resource-icon">${resource.icon}</div>
                <div class="resource-title">${resource.title}</div>
                <div class="resource-description">${resource.description}</div>
                <a href="${resource.link}" target="_blank" class="resource-link">
                    Open Resource →
                </a>
            </div>
        `).join('');
    }

    // Render quick reference sidebar
    renderQuickRef() {
        const quickRef = document.getElementById('quickRef');
        
        quickRef.innerHTML = QUICK_REF_DATA.map(section => `
            <div class="quick-ref-section">
                <div class="quick-ref-title">${section.title}</div>
                <div class="quick-ref-content">${section.content}</div>
            </div>
        `).join('');
    }

    // Show toast notification
    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
            <span class="toast-message">${message}</span>
        `;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// ========================================
// Pomodoro Timer Class
// ========================================

class PomodoroTimer {
    constructor() {
        this.state = this.loadState();
        this.timeRemaining = this.state.durations.focus * 60;
        this.totalTime = this.state.durations.focus * 60;
        this.isRunning = false;
        this.currentMode = 'focus';
        this.interval = null;
        this.init();
    }

    loadState() {
        const saved = localStorage.getItem('pomodoroTimer');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            durations: {
                focus: 25,
                short: 5,
                long: 15
            },
            sessionsUntilLong: 4,
            autoStartBreaks: true,
            soundEnabled: true,
            stats: {
                totalSessions: 0,
                totalFocusMinutes: 0,
                todaySessions: 0,
                lastSessionDate: null
            }
        };
    }

    saveState() {
        localStorage.setItem('pomodoroTimer', JSON.stringify(this.state));
    }

    init() {
        this.bindEvents();
        this.updateDisplay();
        this.updateStats();
        this.checkDailyReset();
    }

    bindEvents() {
        // Modal toggle
        document.getElementById('timerToggle').addEventListener('click', () => {
            this.openModal();
        });

        document.getElementById('timerClose').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('timerModal').addEventListener('click', (e) => {
            if (e.target.id === 'timerModal') {
                this.closeModal();
            }
        });

        // Timer controls
        document.getElementById('timerStart').addEventListener('click', () => {
            if (this.isRunning) {
                this.pause();
            } else {
                this.start();
            }
        });

        document.getElementById('timerReset').addEventListener('click', () => {
            this.reset();
        });

        document.getElementById('timerSkip').addEventListener('click', () => {
            this.skip();
        });

        // Mode buttons
        document.querySelectorAll('.timer-mode').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.target.dataset.mode;
                this.setMode(mode);
            });
        });

        // Settings
        document.getElementById('focusDuration').addEventListener('change', (e) => {
            this.state.durations.focus = parseInt(e.target.value) || 25;
            this.saveState();
            if (this.currentMode === 'focus' && !this.isRunning) {
                this.reset();
            }
        });

        document.getElementById('shortBreakDuration').addEventListener('change', (e) => {
            this.state.durations.short = parseInt(e.target.value) || 5;
            this.saveState();
            if (this.currentMode === 'short' && !this.isRunning) {
                this.reset();
            }
        });

        document.getElementById('longBreakDuration').addEventListener('change', (e) => {
            this.state.durations.long = parseInt(e.target.value) || 15;
            this.saveState();
            if (this.currentMode === 'long' && !this.isRunning) {
                this.reset();
            }
        });

        document.getElementById('sessionsUntilLong').addEventListener('change', (e) => {
            this.state.sessionsUntilLong = parseInt(e.target.value) || 4;
            this.saveState();
        });

        document.getElementById('autoStartBreaks').addEventListener('change', (e) => {
            this.state.autoStartBreaks = e.target.checked;
            this.saveState();
        });

        document.getElementById('soundEnabled').addEventListener('change', (e) => {
            this.state.soundEnabled = e.target.checked;
            this.saveState();
        });

        // Load settings values
        document.getElementById('focusDuration').value = this.state.durations.focus;
        document.getElementById('shortBreakDuration').value = this.state.durations.short;
        document.getElementById('longBreakDuration').value = this.state.durations.long;
        document.getElementById('sessionsUntilLong').value = this.state.sessionsUntilLong;
        document.getElementById('autoStartBreaks').checked = this.state.autoStartBreaks;
        document.getElementById('soundEnabled').checked = this.state.soundEnabled;

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('timerModal').classList.contains('open')) {
                if (e.code === 'Space') {
                    e.preventDefault();
                    if (this.isRunning) {
                        this.pause();
                    } else {
                        this.start();
                    }
                } else if (e.code === 'Escape') {
                    this.closeModal();
                }
            }
        });
    }

    openModal() {
        document.getElementById('timerModal').classList.add('open');
    }

    closeModal() {
        document.getElementById('timerModal').classList.remove('open');
    }

    setMode(mode) {
        if (this.isRunning) {
            this.pause();
        }
        
        this.currentMode = mode;
        
        // Update mode buttons
        document.querySelectorAll('.timer-mode').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        // Update ring color
        const progress = document.getElementById('timerProgress');
        if (mode === 'focus') {
            progress.classList.remove('break');
        } else {
            progress.classList.add('break');
        }

        this.reset();
    }

    start() {
        this.isRunning = true;
        this.updateStartButton();
        document.getElementById('timerToggle').classList.add('active');

        this.interval = setInterval(() => {
            this.timeRemaining--;
            this.updateDisplay();

            if (this.timeRemaining <= 0) {
                this.complete();
            }
        }, 1000);
    }

    pause() {
        this.isRunning = false;
        this.updateStartButton();
        document.getElementById('timerToggle').classList.remove('active');
        
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    reset() {
        this.pause();
        this.timeRemaining = this.state.durations[this.currentMode] * 60;
        this.totalTime = this.state.durations[this.currentMode] * 60;
        this.updateDisplay();
    }

    skip() {
        this.pause();
        this.complete();
    }

    complete() {
        this.pause();
        
        // Play sound
        if (this.state.soundEnabled) {
            this.playSound();
        }

        // Update stats if focus session
        if (this.currentMode === 'focus') {
            this.state.stats.totalSessions++;
            this.state.stats.totalFocusMinutes += this.state.durations.focus;
            this.state.stats.todaySessions++;
            this.state.stats.lastSessionDate = new Date().toDateString();
            this.saveState();
            this.updateStats();
            
            // Show notification
            if (window.app) {
                window.app.showToast('🍅 Focus session complete! Take a break.', 'success');
            }

            // Determine next break type
            const sessionsCompleted = this.state.stats.todaySessions;
            if (sessionsCompleted % this.state.sessionsUntilLong === 0) {
                this.setMode('long');
            } else {
                this.setMode('short');
            }
        } else {
            // Break complete
            if (window.app) {
                window.app.showToast('⏰ Break over! Ready to focus?', 'success');
            }
            this.setMode('focus');
        }

        // Auto-start if enabled
        if (this.state.autoStartBreaks && this.currentMode !== 'focus') {
            setTimeout(() => this.start(), 1000);
        }

        // Animation
        document.querySelector('.timer-display').classList.add('timer-complete');
        setTimeout(() => {
            document.querySelector('.timer-display').classList.remove('timer-complete');
        }, 500);
    }

    updateDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        document.getElementById('timerTime').textContent = timeString;
        document.getElementById('timerToggleTime').textContent = this.isRunning ? timeString : '';

        // Update label
        const labels = {
            focus: 'Focus Time',
            short: 'Short Break',
            long: 'Long Break'
        };
        document.getElementById('timerLabel').textContent = labels[this.currentMode];

        // Update progress ring
        const circumference = 2 * Math.PI * 90; // r=90
        const progress = this.timeRemaining / this.totalTime;
        const offset = circumference * (1 - progress);
        document.getElementById('timerProgress').style.strokeDashoffset = offset;

        // Update page title when running
        if (this.isRunning) {
            document.title = `${timeString} - Azure Security Hub`;
        } else {
            document.title = 'Azure Security Learning Hub';
        }
    }

    updateStartButton() {
        const btn = document.getElementById('timerStart');
        if (this.isRunning) {
            btn.innerHTML = '<span>⏸</span> Pause';
            btn.classList.add('running');
        } else {
            btn.innerHTML = '<span>▶</span> Start';
            btn.classList.remove('running');
        }
    }

    updateStats() {
        document.getElementById('focusSessions').textContent = this.state.stats.totalSessions;
        
        const hours = Math.floor(this.state.stats.totalFocusMinutes / 60);
        const mins = this.state.stats.totalFocusMinutes % 60;
        document.getElementById('totalFocusTime').textContent = `${hours}h ${mins}m`;
        
        document.getElementById('currentStreak').textContent = this.state.stats.todaySessions;
    }

    checkDailyReset() {
        const today = new Date().toDateString();
        if (this.state.stats.lastSessionDate !== today) {
            this.state.stats.todaySessions = 0;
            this.saveState();
        }
    }

    playSound() {
        // Create a simple beep using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
            
            // Play a second beep
            setTimeout(() => {
                const osc2 = audioContext.createOscillator();
                const gain2 = audioContext.createGain();
                osc2.connect(gain2);
                gain2.connect(audioContext.destination);
                osc2.frequency.value = 1000;
                osc2.type = 'sine';
                gain2.gain.setValueAtTime(0.3, audioContext.currentTime);
                gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                osc2.start(audioContext.currentTime);
                osc2.stop(audioContext.currentTime + 0.5);
            }, 200);
        } catch (e) {
            console.log('Audio not supported');
        }
    }
}

// ========================================
// Glossary Manager
// ========================================

class GlossaryManager {
    constructor() {
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.init();
    }

    init() {
        this.bindEvents();
        this.renderGlossary();
    }

    bindEvents() {
        // Category buttons
        document.querySelectorAll('.glossary-cat').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.glossary-cat').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCategory = e.target.dataset.cat;
                this.renderGlossary();
            });
        });

        // Search
        const searchInput = document.getElementById('glossarySearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.renderGlossary();
            });
        }
    }

    renderGlossary() {
        const container = document.getElementById('glossaryContent');
        if (!container || typeof GLOSSARY_DATA === 'undefined') return;

        let html = '';
        let totalTerms = 0;

        const categories = this.currentCategory === 'all' 
            ? Object.keys(GLOSSARY_DATA) 
            : [this.currentCategory];

        categories.forEach(catKey => {
            const category = GLOSSARY_DATA[catKey];
            if (!category) return;

            // Filter terms by search
            const filteredTerms = category.terms.filter(term => {
                if (!this.searchTerm) return true;
                return term.term.toLowerCase().includes(this.searchTerm) ||
                       term.definition.toLowerCase().includes(this.searchTerm);
            });

            if (filteredTerms.length === 0) return;

            totalTerms += filteredTerms.length;

            html += `
                <div class="glossary-category">
                    <div class="glossary-category-header">
                        ${category.title}
                        <span class="glossary-term-count">${filteredTerms.length} terms</span>
                    </div>
                    <div class="glossary-terms">
                        ${filteredTerms.map(term => `
                            <div class="glossary-term ${this.searchTerm && term.term.toLowerCase().includes(this.searchTerm) ? 'highlight' : ''}">
                                <div class="glossary-term-name">${this.highlightMatch(term.term)}</div>
                                <div class="glossary-term-definition">${this.highlightMatch(term.definition)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        if (totalTerms === 0) {
            html = `
                <div class="glossary-no-results">
                    <h3>No terms found</h3>
                    <p>Try a different search term or category</p>
                </div>
            `;
        }

        container.innerHTML = html;
    }

    highlightMatch(text) {
        if (!this.searchTerm) return text;
        const regex = new RegExp(`(${this.escapeRegex(this.searchTerm)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

// ========================================
// Career Roadmap Manager
// ========================================

class CareerRoadmap {
    constructor() {
        this.init();
    }

    init() {
        this.renderTimeline();
    }

    renderTimeline() {
        const container = document.getElementById('careerTimeline');
        if (!container || typeof CAREER_ROADMAP === 'undefined') return;

        let html = '';

        CAREER_ROADMAP.timeline.forEach((phase, index) => {
            const isCurrent = index === 0; // First phase is where user is starting
            
            html += `
                <div class="career-phase ${isCurrent ? 'current' : ''}">
                    <div class="career-phase-header">
                        <span class="career-phase-icon">${phase.icon}</span>
                        <div class="career-phase-title">
                            <span class="year">Year ${phase.year}</span>
                            <h3>${phase.title}</h3>
                            <span class="phase-name">${phase.phase} Phase</span>
                        </div>
                        <span class="career-phase-salary">${phase.salary}</span>
                    </div>
                    
                    <p class="career-phase-description">${phase.description}</p>
                    
                    <div class="career-phase-details">
                        <div class="career-detail">
                            <div class="career-detail-title">🎓 Certifications</div>
                            <div class="career-detail-list">
                                ${phase.certifications.map(cert => `<span class="career-tag cert">${cert}</span>`).join('')}
                            </div>
                        </div>
                        <div class="career-detail">
                            <div class="career-detail-title">💼 Target Roles</div>
                            <div class="career-detail-list">
                                ${phase.roles.map(role => `<span class="career-tag role">${role}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="career-checklist">
                        <div class="career-checklist-title">✅ Checklist for This Phase</div>
                        ${phase.checklist.map(item => `
                            <div class="career-checklist-item">${item}</div>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new LearningHub();
    window.timer = new PomodoroTimer();
    window.glossary = new GlossaryManager();
    window.career = new CareerRoadmap();
});
