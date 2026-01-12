// ========================================
// Azure Security Learning Hub - Complete Data
// Zero to Hero: Cloud Security & AI Security
// ========================================

// ============================================
// COMPREHENSIVE 16-WEEK CURRICULUM (112 Days)
// Zero to Hero: Cloud Security, Web AppSec & AI Security
// ============================================

const SCHEDULE_DATA = {
    1: {
        theme: "Security Fundamentals & Cloud Basics",
        description: "Build your security foundation before diving into cloud",
        days: [
            {
                day: 1,
                title: "Cybersecurity Fundamentals",
                subtitle: "CIA Triad, Security Principles & Terminology",
                activities: [
                    { time: "1.5 hrs", title: "CIA Triad Deep Dive", description: "Confidentiality, Integrity, Availability - the core of security", link: "https://www.nist.gov/cyberframework", type: "learn" },
                    { time: "1 hr", title: "Security Terminology", description: "Threats, vulnerabilities, risks, assets, controls", link: "https://csrc.nist.gov/glossary", type: "learn" },
                    { time: "30 min", title: "📝 Create Security Glossary", description: "Start your personal security knowledge base", type: "hands-on" }
                ]
            },
            {
                day: 2,
                title: "Threat Landscape",
                subtitle: "Common Attacks, Threat Actors & Attack Vectors",
                activities: [
                    { time: "1 hr", title: "Types of Cyber Attacks", description: "Malware, phishing, DDoS, SQL injection, XSS, MITM", link: "https://attack.mitre.org/", type: "learn" },
                    { time: "1 hr", title: "Threat Actors", description: "Nation-states, hacktivists, criminals, insiders", link: "https://attack.mitre.org/groups/", type: "learn" },
                    { time: "1 hr", title: "MITRE ATT&CK Framework", description: "Understanding tactics, techniques, and procedures", link: "https://attack.mitre.org/matrices/enterprise/", type: "learn" }
                ]
            },
            {
                day: 3,
                title: "Cryptography Basics",
                subtitle: "Encryption, Hashing & Digital Signatures",
                activities: [
                    { time: "1 hr", title: "Symmetric vs Asymmetric Encryption", description: "AES, RSA, key exchange", link: "https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-overview", type: "learn" },
                    { time: "1 hr", title: "Hashing & Digital Signatures", description: "SHA-256, MD5, PKI basics", link: "https://learn.microsoft.com/en-us/azure/key-vault/keys/about-keys", type: "learn" },
                    { time: "1 hr", title: "Certificates & PKI", description: "SSL/TLS, certificate authorities, trust chains", link: "https://learn.microsoft.com/en-us/azure/key-vault/certificates/about-certificates", type: "learn" }
                ]
            },
            {
                day: 4,
                title: "Security Frameworks",
                subtitle: "NIST, CIS, ISO 27001 & Compliance Basics",
                activities: [
                    { time: "1 hr", title: "NIST Cybersecurity Framework", description: "Identify, Protect, Detect, Respond, Recover", link: "https://www.nist.gov/cyberframework", type: "learn" },
                    { time: "1 hr", title: "CIS Controls", description: "Critical security controls for organizations", link: "https://www.cisecurity.org/controls", type: "learn" },
                    { time: "1 hr", title: "ISO 27001 Overview", description: "Information security management systems", link: "https://www.iso.org/isoiec-27001-information-security.html", type: "learn" }
                ]
            },
            {
                day: 5,
                title: "Cloud Computing Fundamentals",
                subtitle: "IaaS, PaaS, SaaS & Cloud Service Models",
                activities: [
                    { time: "1 hr", title: "Cloud Service Models", description: "Understanding IaaS, PaaS, SaaS differences", link: "https://learn.microsoft.com/training/modules/describe-cloud-compute/", type: "learn" },
                    { time: "1 hr", title: "Shared Responsibility Model", description: "Who secures what in the cloud", link: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility", type: "learn" },
                    { time: "1 hr", title: "Cloud Deployment Models", description: "Public, private, hybrid, multi-cloud", link: "https://learn.microsoft.com/training/modules/describe-cloud-compute/", type: "learn" }
                ]
            },
            {
                day: 6,
                title: "Azure Fundamentals",
                subtitle: "Azure Architecture, Regions & Services",
                activities: [
                    { time: "1.5 hrs", title: "Azure Global Infrastructure", description: "Regions, availability zones, data centers", link: "https://learn.microsoft.com/training/modules/describe-core-architectural-components-of-azure/", type: "learn" },
                    { time: "1.5 hrs", title: "Azure Resource Hierarchy", description: "Subscriptions, resource groups, resources", link: "https://learn.microsoft.com/training/modules/describe-core-architectural-components-of-azure/", type: "learn" },
                    { time: "1 hr", title: "🛠️ Set Up Azure Access", description: "Create free account or access company subscription", type: "hands-on" }
                ]
            },
            {
                day: 7,
                title: "Week 1 Review & Lab",
                subtitle: "Consolidate Knowledge & Hands-On Practice",
                activities: [
                    { time: "2 hrs", title: "📝 Security Concepts Quiz", description: "Test your understanding of fundamentals", type: "review" },
                    { time: "2 hrs", title: "🛠️ Azure Portal Exploration", description: "Navigate portal, create resource groups, explore services", type: "hands-on" },
                    { time: "1 hr", title: "📖 Read: Azure Security Best Practices", description: "Microsoft's official security guidance", link: "https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns", type: "read" }
                ]
            }
        ]
    },
    2: {
        theme: "Identity & Access Management Foundation",
        description: "Master identity - the new security perimeter",
        days: [
            {
                day: 8,
                title: "Identity Concepts",
                subtitle: "Authentication, Authorization & Identity Lifecycle",
                activities: [
                    { time: "1 hr", title: "Authentication vs Authorization", description: "Understanding the difference and relationship", link: "https://learn.microsoft.com/en-us/entra/fundamentals/", type: "learn" },
                    { time: "1 hr", title: "Identity Lifecycle Management", description: "Provisioning, management, deprovisioning", link: "https://learn.microsoft.com/en-us/entra/identity/", type: "learn" },
                    { time: "1 hr", title: "Single Sign-On (SSO) Concepts", description: "Federation, SAML, OIDC, OAuth 2.0", link: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on", type: "learn" }
                ]
            },
            {
                day: 9,
                title: "Microsoft Entra ID Deep Dive",
                subtitle: "Tenants, Users, Groups & Applications",
                activities: [
                    { time: "1.5 hrs", title: "Entra ID Architecture", description: "Tenants, directories, and identity objects", link: "https://learn.microsoft.com/en-us/entra/fundamentals/whatis", type: "learn" },
                    { time: "1 hr", title: "Users & Groups Management", description: "Creating and managing identities", link: "https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Create Users & Groups", description: "Hands-on identity configuration", type: "hands-on" }
                ]
            },
            {
                day: 10,
                title: "Multi-Factor Authentication",
                subtitle: "MFA Methods, Policies & Best Practices",
                activities: [
                    { time: "1 hr", title: "MFA Fundamentals", description: "Something you know, have, and are", link: "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks", type: "learn" },
                    { time: "1 hr", title: "MFA Methods & Strengths", description: "Authenticator app, FIDO2, phone, email", link: "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-methods", type: "learn" },
                    { time: "1 hr", title: "🛠️ Enable & Configure MFA", description: "Set up MFA for your account", type: "hands-on" }
                ]
            },
            {
                day: 11,
                title: "Conditional Access",
                subtitle: "Policy-Based Access Control",
                activities: [
                    { time: "1.5 hrs", title: "Conditional Access Concepts", description: "Signals, decisions, and enforcement", link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview", type: "learn" },
                    { time: "1 hr", title: "Common Conditional Access Policies", description: "MFA for admins, block legacy auth, compliant devices", link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-policy-common", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Create Conditional Access Policies", description: "Implement real-world policies", type: "hands-on" }
                ]
            },
            {
                day: 12,
                title: "Role-Based Access Control (RBAC)",
                subtitle: "Least Privilege & Custom Roles",
                activities: [
                    { time: "1 hr", title: "RBAC Fundamentals", description: "Roles, role assignments, and scopes", link: "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview", type: "learn" },
                    { time: "1 hr", title: "Built-in Roles Deep Dive", description: "Owner, Contributor, Reader, custom roles", link: "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles", type: "learn" },
                    { time: "1 hr", title: "🛠️ Assign Roles & Create Custom Role", description: "Implement RBAC in your environment", type: "hands-on" }
                ]
            },
            {
                day: 13,
                title: "Privileged Identity Management",
                subtitle: "Just-in-Time Access & Privileged Access",
                activities: [
                    { time: "1.5 hrs", title: "PIM Concepts", description: "Just-in-time, just-enough-access", link: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure", type: "learn" },
                    { time: "1 hr", title: "Privileged Access Workstations", description: "Securing administrative access", link: "https://learn.microsoft.com/en-us/security/privileged-access-workstations/privileged-access-devices", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Configure PIM", description: "Set up time-bound privileged access", type: "hands-on" }
                ]
            },
            {
                day: 14,
                title: "Identity Lab & AZ-900 Prep",
                subtitle: "Complete Identity Lab & Certification Prep",
                activities: [
                    { time: "3 hrs", title: "🛠️ Complete Identity Lab", description: "Full identity configuration exercise", type: "lab" },
                    { time: "2 hrs", title: "AZ-900 Practice Test", description: "Prepare for Azure Fundamentals", link: "https://learn.microsoft.com/en-us/certifications/exams/az-900/practice/assessment?assessment-type=practice&assessmentId=23", type: "practice" }
                ]
            }
        ]
    },
    3: {
        theme: "Network Security Architecture",
        description: "Design and implement secure network architectures",
        days: [
            {
                day: 15,
                title: "Network Security Fundamentals",
                subtitle: "OSI Model, TCP/IP & Network Attacks",
                activities: [
                    { time: "1 hr", title: "OSI Model Security Perspective", description: "Security at each layer", link: "https://learn.microsoft.com/en-us/azure/ddos-protection/ddos-protection-overview", type: "learn" },
                    { time: "1 hr", title: "Common Network Attacks", description: "DDoS, MITM, DNS poisoning, port scanning", link: "https://attack.mitre.org/tactics/TA0040/", type: "learn" },
                    { time: "1 hr", title: "Network Security Controls", description: "Firewalls, IDS/IPS, segmentation", link: "https://learn.microsoft.com/en-us/azure/security/fundamentals/network-best-practices", type: "learn" }
                ]
            },
            {
                day: 16,
                title: "Azure Virtual Networks",
                subtitle: "VNets, Subnets & IP Addressing",
                activities: [
                    { time: "1.5 hrs", title: "VNet Architecture", description: "Address spaces, subnets, DNS", link: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview", type: "learn" },
                    { time: "1 hr", title: "VNet Peering & Connectivity", description: "Connecting virtual networks", link: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Design & Deploy VNet", description: "Create production-like network", type: "hands-on" }
                ]
            },
            {
                day: 17,
                title: "Network Security Groups & ASGs",
                subtitle: "Traffic Filtering & Micro-Segmentation",
                activities: [
                    { time: "1 hr", title: "NSG Deep Dive", description: "Rules, priority, default rules", link: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview", type: "learn" },
                    { time: "1 hr", title: "Application Security Groups", description: "Grouping VMs for security rules", link: "https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups", type: "learn" },
                    { time: "1 hr", title: "🛠️ Configure Complex NSG Rules", description: "Implement layered security", type: "hands-on" }
                ]
            },
            {
                day: 18,
                title: "Azure Firewall",
                subtitle: "Centralized Network Security",
                activities: [
                    { time: "1.5 hrs", title: "Azure Firewall Architecture", description: "Features, SKUs, and policies", link: "https://learn.microsoft.com/en-us/azure/firewall/overview", type: "learn" },
                    { time: "1 hr", title: "Firewall Rules & Policies", description: "Application, network, and NAT rules", link: "https://learn.microsoft.com/en-us/azure/firewall/rule-processing", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Deploy Azure Firewall", description: "Configure central firewall", type: "hands-on" }
                ]
            },
            {
                day: 19,
                title: "Web Application Firewall & DDoS",
                subtitle: "Application Layer Protection",
                activities: [
                    { time: "1 hr", title: "WAF Concepts & OWASP", description: "Protecting web applications", link: "https://learn.microsoft.com/en-us/azure/web-application-firewall/overview", type: "learn" },
                    { time: "1 hr", title: "Azure DDoS Protection", description: "Volumetric attack mitigation", link: "https://learn.microsoft.com/en-us/azure/ddos-protection/ddos-protection-overview", type: "learn" },
                    { time: "1 hr", title: "🛠️ Configure WAF Policies", description: "Set up Application Gateway with WAF", type: "hands-on" }
                ]
            },
            {
                day: 20,
                title: "Private Connectivity",
                subtitle: "Private Link, Service Endpoints & ExpressRoute",
                activities: [
                    { time: "1 hr", title: "Private Endpoints", description: "Private access to PaaS services", link: "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview", type: "learn" },
                    { time: "1 hr", title: "Service Endpoints vs Private Link", description: "When to use which", link: "https://learn.microsoft.com/en-us/azure/private-link/private-link-service-overview", type: "learn" },
                    { time: "1 hr", title: "🛠️ Create Private Endpoints", description: "Secure storage and databases", type: "hands-on" }
                ]
            },
            {
                day: 21,
                title: "Network Security Lab",
                subtitle: "Build Complete Secure Network Architecture",
                activities: [
                    { time: "5 hrs", title: "🛠️ Complete Network Security Lab", description: "Hub-spoke with firewall, NSGs, private endpoints", type: "lab" }
                ]
            }
        ]
    },
    4: {
        theme: "Data Security & Protection",
        description: "Protect data at rest, in transit, and in use",
        days: [
            {
                day: 22,
                title: "Data Classification & Governance",
                subtitle: "Data Categories, Sensitivity & Lifecycle",
                activities: [
                    { time: "1 hr", title: "Data Classification Fundamentals", description: "Public, internal, confidential, restricted", link: "https://learn.microsoft.com/en-us/purview/data-classification-overview", type: "learn" },
                    { time: "1 hr", title: "Data Governance Concepts", description: "Ownership, stewardship, quality", link: "https://learn.microsoft.com/en-us/purview/governance-solutions-overview", type: "learn" },
                    { time: "1 hr", title: "Data Lifecycle Management", description: "Creation, storage, use, archival, destruction", link: "https://learn.microsoft.com/en-us/purview/data-lifecycle-management", type: "learn" }
                ]
            },
            {
                day: 23,
                title: "Encryption in Azure",
                subtitle: "Encryption at Rest & in Transit",
                activities: [
                    { time: "1 hr", title: "Azure Encryption Overview", description: "Service-managed vs customer-managed keys", link: "https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-overview", type: "learn" },
                    { time: "1 hr", title: "Storage Encryption", description: "SSE, infrastructure encryption", link: "https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption", type: "learn" },
                    { time: "1 hr", title: "TLS & In-Transit Encryption", description: "Securing data in motion", link: "https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-overview#encryption-of-data-in-transit", type: "learn" }
                ]
            },
            {
                day: 24,
                title: "Azure Key Vault",
                subtitle: "Secrets, Keys & Certificate Management",
                activities: [
                    { time: "1 hr", title: "Key Vault Architecture", description: "Vaults, HSM, access models", link: "https://learn.microsoft.com/en-us/azure/key-vault/general/overview", type: "learn" },
                    { time: "1 hr", title: "Key Vault Best Practices", description: "Rotation, backup, recovery", link: "https://learn.microsoft.com/en-us/azure/key-vault/general/best-practices", type: "learn" },
                    { time: "1 hr", title: "🛠️ Deploy Key Vault", description: "Store secrets, keys, certificates", type: "hands-on" }
                ]
            },
            {
                day: 25,
                title: "Database Security",
                subtitle: "SQL Security, Cosmos DB & Data Masking",
                activities: [
                    { time: "1 hr", title: "Azure SQL Security", description: "TDE, Always Encrypted, auditing", link: "https://learn.microsoft.com/en-us/azure/azure-sql/database/security-overview", type: "learn" },
                    { time: "1 hr", title: "Dynamic Data Masking", description: "Protecting sensitive data", link: "https://learn.microsoft.com/en-us/azure/azure-sql/database/dynamic-data-masking-overview", type: "learn" },
                    { time: "1 hr", title: "🛠️ Configure SQL Security", description: "Enable TDE, auditing, threat detection", type: "hands-on" }
                ]
            },
            {
                day: 26,
                title: "Microsoft Purview",
                subtitle: "Data Discovery, Classification & DLP",
                activities: [
                    { time: "1.5 hrs", title: "Microsoft Purview Overview", description: "Unified data governance", link: "https://learn.microsoft.com/en-us/purview/purview", type: "learn" },
                    { time: "1 hr", title: "Sensitivity Labels", description: "Automatic classification and protection", link: "https://learn.microsoft.com/en-us/purview/sensitivity-labels", type: "learn" },
                    { time: "1.5 hrs", title: "Data Loss Prevention (DLP)", description: "Preventing data leakage", link: "https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp", type: "learn" }
                ]
            },
            {
                day: 27,
                title: "Backup & Disaster Recovery",
                subtitle: "Azure Backup, Site Recovery & Business Continuity",
                activities: [
                    { time: "1 hr", title: "Azure Backup", description: "Backup solutions for Azure resources", link: "https://learn.microsoft.com/en-us/azure/backup/backup-overview", type: "learn" },
                    { time: "1 hr", title: "Azure Site Recovery", description: "Disaster recovery planning", link: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview", type: "learn" },
                    { time: "1 hr", title: "🛠️ Configure Backup", description: "Set up backup for VMs and databases", type: "hands-on" }
                ]
            },
            {
                day: 28,
                title: "Data Security Lab",
                subtitle: "Complete Data Protection Implementation",
                activities: [
                    { time: "5 hrs", title: "🛠️ Complete Data Security Lab", description: "Key Vault, encryption, SQL security, backup", type: "lab" }
                ]
            }
        ]
    },
    5: {
        theme: "Application Security & DevSecOps",
        description: "Secure the entire application lifecycle",
        days: [
            {
                day: 29,
                title: "Application Security Fundamentals",
                subtitle: "OWASP Top 10 & Secure Coding",
                activities: [
                    { time: "1.5 hrs", title: "OWASP Top 10 (2021)", description: "Most critical web application risks", link: "https://owasp.org/www-project-top-ten/", type: "learn" },
                    { time: "1 hr", title: "Secure Coding Principles", description: "Input validation, output encoding, least privilege", link: "https://cheatsheetseries.owasp.org/", type: "learn" },
                    { time: "1.5 hrs", title: "Threat Modeling for Apps", description: "STRIDE methodology", link: "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool", type: "learn" }
                ]
            },
            {
                day: 30,
                title: "API Security",
                subtitle: "OAuth 2.0, API Gateway & Rate Limiting",
                activities: [
                    { time: "1 hr", title: "API Security Best Practices", description: "Authentication, authorization, validation", link: "https://owasp.org/www-project-api-security/", type: "learn" },
                    { time: "1 hr", title: "OAuth 2.0 & OpenID Connect", description: "Modern API authentication", link: "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow", type: "learn" },
                    { time: "1 hr", title: "Azure API Management Security", description: "Gateway security features", link: "https://learn.microsoft.com/en-us/azure/api-management/api-management-security-overview", type: "learn" }
                ]
            },
            {
                day: 31,
                title: "Container Security",
                subtitle: "Docker & Azure Container Security",
                activities: [
                    { time: "1 hr", title: "Container Security Fundamentals", description: "Image security, runtime security", link: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-trust", type: "learn" },
                    { time: "1 hr", title: "Azure Container Registry Security", description: "Image scanning, signing, policies", link: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-best-practices", type: "learn" },
                    { time: "1 hr", title: "🛠️ Scan Container Images", description: "Use Defender for container security", type: "hands-on" }
                ]
            },
            {
                day: 32,
                title: "Kubernetes Security (AKS)",
                subtitle: "Cluster Security & Workload Protection",
                activities: [
                    { time: "1.5 hrs", title: "AKS Security Fundamentals", description: "Cluster hardening, RBAC, network policies", link: "https://learn.microsoft.com/en-us/azure/aks/concepts-security", type: "learn" },
                    { time: "1 hr", title: "Pod Security & Admission Control", description: "Pod security standards, OPA Gatekeeper", link: "https://learn.microsoft.com/en-us/azure/aks/use-pod-security-policies", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Secure AKS Cluster", description: "Deploy hardened Kubernetes cluster", type: "hands-on" }
                ]
            },
            {
                day: 33,
                title: "DevSecOps & CI/CD Security",
                subtitle: "Shift Left Security",
                activities: [
                    { time: "1 hr", title: "DevSecOps Principles", description: "Security in the pipeline", link: "https://learn.microsoft.com/en-us/azure/devops/migrate/security-validation-cicd-pipeline", type: "learn" },
                    { time: "1 hr", title: "SAST, DAST & SCA", description: "Security testing types", link: "https://owasp.org/www-community/Source_Code_Analysis_Tools", type: "learn" },
                    { time: "1 hr", title: "GitHub Advanced Security", description: "Code scanning, secret scanning", link: "https://docs.github.com/en/code-security", type: "learn" }
                ]
            },
            {
                day: 34,
                title: "Managed Identities & Workload Identity",
                subtitle: "Passwordless Authentication for Apps",
                activities: [
                    { time: "1 hr", title: "Managed Identities", description: "System vs user-assigned", link: "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview", type: "learn" },
                    { time: "1 hr", title: "Workload Identity Federation", description: "External identity federation", link: "https://learn.microsoft.com/en-us/entra/workload-id/workload-identity-federation", type: "learn" },
                    { time: "1 hr", title: "🛠️ Configure Managed Identity", description: "Connect app to Key Vault without secrets", type: "hands-on" }
                ]
            },
            {
                day: 35,
                title: "Application Security Lab",
                subtitle: "Secure Application Deployment",
                activities: [
                    { time: "5 hrs", title: "🛠️ Complete App Security Lab", description: "Deploy secure app with managed identity, Key Vault, WAF", type: "lab" }
                ]
            }
        ]
    },
    6: {
        theme: "Security Operations & Monitoring",
        description: "Detect, respond, and recover from threats",
        days: [
            {
                day: 36,
                title: "Security Monitoring Fundamentals",
                subtitle: "Logs, Metrics & Security Information",
                activities: [
                    { time: "1 hr", title: "Security Monitoring Concepts", description: "Detection, alerting, investigation", link: "https://learn.microsoft.com/en-us/azure/azure-monitor/overview", type: "learn" },
                    { time: "1 hr", title: "Azure Monitor & Log Analytics", description: "Centralized logging platform", link: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview", type: "learn" },
                    { time: "1 hr", title: "🛠️ Set Up Log Analytics", description: "Configure workspace and data collection", type: "hands-on" }
                ]
            },
            {
                day: 37,
                title: "Microsoft Defender for Cloud",
                subtitle: "Cloud Security Posture Management",
                activities: [
                    { time: "1.5 hrs", title: "Defender for Cloud Overview", description: "CSPM and CWP capabilities", link: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction", type: "learn" },
                    { time: "1 hr", title: "Secure Score & Recommendations", description: "Measuring and improving posture", link: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/secure-score-security-controls", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Enable Defender for Cloud", description: "Configure CSPM and workload protection", type: "hands-on" }
                ]
            },
            {
                day: 38,
                title: "Microsoft Sentinel - SIEM",
                subtitle: "Cloud-Native SIEM & SOAR",
                activities: [
                    { time: "1.5 hrs", title: "Sentinel Architecture", description: "Workspaces, data connectors, costs", link: "https://learn.microsoft.com/en-us/azure/sentinel/overview", type: "learn" },
                    { time: "1 hr", title: "Data Connectors", description: "Ingesting security data", link: "https://learn.microsoft.com/en-us/azure/sentinel/connect-data-sources", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Deploy Microsoft Sentinel", description: "Set up SIEM workspace", type: "hands-on" }
                ]
            },
            {
                day: 39,
                title: "Threat Detection & Analytics",
                subtitle: "Analytics Rules & Hunting",
                activities: [
                    { time: "1 hr", title: "Analytics Rules", description: "Scheduled, ML, and fusion rules", link: "https://learn.microsoft.com/en-us/azure/sentinel/detect-threats-built-in", type: "learn" },
                    { time: "1 hr", title: "KQL for Security", description: "Query language for investigations", link: "https://learn.microsoft.com/en-us/azure/sentinel/kusto-overview", type: "learn" },
                    { time: "1 hr", title: "🛠️ Create Detection Rules", description: "Build custom analytics", type: "hands-on" }
                ]
            },
            {
                day: 40,
                title: "Incident Response & Automation",
                subtitle: "Playbooks & SOAR",
                activities: [
                    { time: "1 hr", title: "Incident Management", description: "Triage, investigation, response", link: "https://learn.microsoft.com/en-us/azure/sentinel/investigate-incidents", type: "learn" },
                    { time: "1 hr", title: "Automation with Playbooks", description: "Logic Apps for security response", link: "https://learn.microsoft.com/en-us/azure/sentinel/automate-responses-with-playbooks", type: "learn" },
                    { time: "1 hr", title: "🛠️ Create Response Playbook", description: "Automate incident response", type: "hands-on" }
                ]
            },
            {
                day: 41,
                title: "Threat Hunting",
                subtitle: "Proactive Threat Discovery",
                activities: [
                    { time: "1.5 hrs", title: "Threat Hunting Methodology", description: "Hypothesis-driven hunting", link: "https://learn.microsoft.com/en-us/azure/sentinel/hunting", type: "learn" },
                    { time: "1 hr", title: "Hunting Queries & Notebooks", description: "Advanced investigation tools", link: "https://learn.microsoft.com/en-us/azure/sentinel/notebooks", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Conduct Threat Hunt", description: "Practice hunting techniques", type: "hands-on" }
                ]
            },
            {
                day: 42,
                title: "Security Operations Lab",
                subtitle: "Complete SOC Setup",
                activities: [
                    { time: "5 hrs", title: "🛠️ Complete SecOps Lab", description: "Full Defender + Sentinel deployment with detections", type: "lab" }
                ]
            }
        ]
    },
    7: {
        theme: "AI Security Fundamentals",
        description: "Understand AI/ML security risks and controls",
        days: [
            {
                day: 43,
                title: "AI/ML Security Landscape",
                subtitle: "Unique Risks & Attack Surface",
                activities: [
                    { time: "1 hr", title: "AI Security Fundamentals", description: "Why AI systems need special security", link: "https://learn.microsoft.com/en-us/training/paths/ai-security-fundamentals/", type: "learn" },
                    { time: "1 hr", title: "AI Attack Surface", description: "Data, model, inference, deployment", link: "https://atlas.mitre.org/", type: "learn" },
                    { time: "1 hr", title: "MITRE ATLAS Framework", description: "AI-specific attack techniques", link: "https://atlas.mitre.org/matrices/ATLAS", type: "learn" }
                ]
            },
            {
                day: 44,
                title: "AI Threat Categories",
                subtitle: "Poisoning, Evasion & Extraction",
                activities: [
                    { time: "1 hr", title: "Data Poisoning Attacks", description: "Corrupting training data", link: "https://learn.microsoft.com/en-us/training/modules/ai-security-fundamentals-introduction/", type: "learn" },
                    { time: "1 hr", title: "Model Evasion & Adversarial Examples", description: "Fooling ML models", link: "https://learn.microsoft.com/en-us/training/modules/ai-security-fundamentals-introduction/", type: "learn" },
                    { time: "1 hr", title: "Model Extraction & Theft", description: "Stealing ML models", link: "https://learn.microsoft.com/en-us/training/modules/ai-security-fundamentals-introduction/", type: "learn" }
                ]
            },
            {
                day: 45,
                title: "LLM Security",
                subtitle: "OWASP LLM Top 10",
                activities: [
                    { time: "1.5 hrs", title: "OWASP LLM Top 10", description: "Critical LLM vulnerabilities", link: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", type: "learn" },
                    { time: "1 hr", title: "Prompt Injection Attacks", description: "Direct and indirect injection", link: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", type: "learn" },
                    { time: "1.5 hrs", title: "Jailbreaking & Guardrail Bypass", description: "Bypassing safety controls", link: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", type: "learn" }
                ]
            },
            {
                day: 46,
                title: "AI Security Controls",
                subtitle: "Protecting AI Systems",
                activities: [
                    { time: "1 hr", title: "AI Security Controls Overview", description: "Prevention, detection, response", link: "https://learn.microsoft.com/en-us/training/modules/ai-security-controls/", type: "learn" },
                    { time: "1 hr", title: "Input/Output Validation", description: "Sanitizing AI inputs and outputs", link: "https://learn.microsoft.com/en-us/training/modules/ai-security-controls/", type: "learn" },
                    { time: "1 hr", title: "Model Security & Integrity", description: "Protecting model artifacts", link: "https://learn.microsoft.com/en-us/training/modules/ai-security-controls/", type: "learn" }
                ]
            },
            {
                day: 47,
                title: "AI Security Testing",
                subtitle: "Red Teaming AI Systems",
                activities: [
                    { time: "1.5 hrs", title: "AI Red Teaming", description: "Testing AI for vulnerabilities", link: "https://learn.microsoft.com/en-us/training/modules/introduction-ai-security-testing/", type: "learn" },
                    { time: "1 hr", title: "Adversarial Testing Tools", description: "Tools for AI security testing", link: "https://github.com/Trusted-AI/adversarial-robustness-toolbox", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Practice AI Red Teaming", description: "Test for prompt injection", type: "hands-on" }
                ]
            },
            {
                day: 48,
                title: "Responsible AI & Ethics",
                subtitle: "Fairness, Transparency & Accountability",
                activities: [
                    { time: "1 hr", title: "Responsible AI Principles", description: "Microsoft's AI ethics framework", link: "https://www.microsoft.com/en-us/ai/responsible-ai", type: "learn" },
                    { time: "1 hr", title: "AI Fairness & Bias", description: "Detecting and mitigating bias", link: "https://learn.microsoft.com/en-us/azure/machine-learning/concept-fairness-ml", type: "learn" },
                    { time: "1 hr", title: "AI Governance", description: "Policies and controls for AI", link: "https://learn.microsoft.com/en-us/azure/machine-learning/how-to-use-registry-for-governance", type: "learn" }
                ]
            },
            {
                day: 49,
                title: "AI Security Fundamentals Lab",
                subtitle: "AI Security Assessment",
                activities: [
                    { time: "5 hrs", title: "🛠️ Complete AI Security Assessment Lab", description: "Assess and test AI system security", type: "lab" }
                ]
            }
        ]
    },
    8: {
        theme: "Azure AI Security Architecture",
        description: "Secure Azure AI services in production",
        days: [
            {
                day: 50,
                title: "Azure AI Services Security",
                subtitle: "Cognitive Services & AI Platform",
                activities: [
                    { time: "1 hr", title: "Azure AI Services Overview", description: "Security features across AI services", link: "https://learn.microsoft.com/en-us/azure/ai-services/security-features", type: "learn" },
                    { time: "1 hr", title: "Authentication & Authorization", description: "Keys, Entra ID, managed identity", link: "https://learn.microsoft.com/en-us/azure/ai-services/authentication", type: "learn" },
                    { time: "1 hr", title: "Network Security for AI", description: "Private endpoints, VNet integration", link: "https://learn.microsoft.com/en-us/azure/ai-services/cognitive-services-virtual-networks", type: "learn" }
                ]
            },
            {
                day: 51,
                title: "Azure OpenAI Security",
                subtitle: "Securing Generative AI",
                activities: [
                    { time: "1.5 hrs", title: "Azure OpenAI Security Architecture", description: "Deployment patterns and controls", link: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/system-security", type: "learn" },
                    { time: "1 hr", title: "Content Filtering", description: "Configuring safety filters", link: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/content-filter", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Deploy Secure OpenAI", description: "Private endpoint, managed identity, content filter", type: "hands-on" }
                ]
            },
            {
                day: 52,
                title: "Azure Machine Learning Security",
                subtitle: "MLOps Security",
                activities: [
                    { time: "1 hr", title: "Azure ML Security Overview", description: "Workspace, compute, data security", link: "https://learn.microsoft.com/en-us/azure/machine-learning/concept-enterprise-security", type: "learn" },
                    { time: "1 hr", title: "Secure ML Workspaces", description: "Network isolation, encryption", link: "https://learn.microsoft.com/en-us/azure/machine-learning/how-to-secure-workspace-vnet", type: "learn" },
                    { time: "1 hr", title: "Model Registry & Governance", description: "Securing model lifecycle", link: "https://learn.microsoft.com/en-us/azure/machine-learning/how-to-manage-models", type: "learn" }
                ]
            },
            {
                day: 53,
                title: "AI Data Security",
                subtitle: "Training Data & Inference Protection",
                activities: [
                    { time: "1 hr", title: "Training Data Security", description: "Protecting sensitive training data", link: "https://learn.microsoft.com/en-us/azure/machine-learning/concept-data-encryption", type: "learn" },
                    { time: "1 hr", title: "Differential Privacy", description: "Privacy-preserving ML", link: "https://learn.microsoft.com/en-us/azure/machine-learning/concept-differential-privacy", type: "learn" },
                    { time: "1 hr", title: "Confidential Computing for AI", description: "Protecting data in use", link: "https://learn.microsoft.com/en-us/azure/confidential-computing/", type: "learn" }
                ]
            },
            {
                day: 54,
                title: "AI Monitoring & Auditing",
                subtitle: "Logging, Metrics & Compliance",
                activities: [
                    { time: "1 hr", title: "AI Service Monitoring", description: "Metrics and diagnostic logs", link: "https://learn.microsoft.com/en-us/azure/ai-services/diagnostic-logging", type: "learn" },
                    { time: "1 hr", title: "AI Audit Trails", description: "Tracking AI usage and decisions", link: "https://learn.microsoft.com/en-us/azure/machine-learning/how-to-log-view-metrics", type: "learn" },
                    { time: "1 hr", title: "🛠️ Configure AI Monitoring", description: "Set up logging and alerts", type: "hands-on" }
                ]
            },
            {
                day: 55,
                title: "AI Security Reference Architecture",
                subtitle: "Production AI Security Patterns",
                activities: [
                    { time: "1.5 hrs", title: "Enterprise AI Architecture", description: "Secure AI landing zone", link: "https://learn.microsoft.com/en-us/azure/architecture/ai-ml/", type: "learn" },
                    { time: "1.5 hrs", title: "AI Gateway Pattern", description: "Centralizing AI access control", link: "https://learn.microsoft.com/en-us/azure/architecture/ai-ml/architecture/azure-openai-gateway-multi-backend", type: "learn" },
                    { time: "1 hr", title: "📝 Design AI Security Architecture", description: "Create your own design", type: "hands-on" }
                ]
            },
            {
                day: 56,
                title: "Azure AI Security Lab",
                subtitle: "Complete AI Security Implementation",
                activities: [
                    { time: "5 hrs", title: "🛠️ Complete AI Security Lab", description: "Deploy secure AI with all controls", type: "lab" }
                ]
            }
        ]
    },
    9: {
        theme: "Cloud Security Architecture",
        description: "Design enterprise-grade secure architectures",
        days: [
            {
                day: 57,
                title: "Zero Trust Architecture",
                subtitle: "Never Trust, Always Verify",
                activities: [
                    { time: "1.5 hrs", title: "Zero Trust Principles", description: "Verify explicitly, least privilege, assume breach", link: "https://learn.microsoft.com/en-us/security/zero-trust/", type: "learn" },
                    { time: "1 hr", title: "Zero Trust Pillars", description: "Identity, endpoints, apps, data, infrastructure, network", link: "https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview", type: "learn" },
                    { time: "1.5 hrs", title: "Zero Trust in Azure", description: "Implementing Zero Trust architecture", link: "https://learn.microsoft.com/en-us/security/zero-trust/azure-infrastructure-overview", type: "learn" }
                ]
            },
            {
                day: 58,
                title: "Azure Landing Zones",
                subtitle: "Enterprise-Scale Security",
                activities: [
                    { time: "1.5 hrs", title: "Landing Zone Concepts", description: "Foundation for cloud adoption", link: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/", type: "learn" },
                    { time: "1 hr", title: "Security in Landing Zones", description: "Built-in security controls", link: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/security", type: "learn" },
                    { time: "1.5 hrs", title: "Management Groups & Policies", description: "Governance at scale", link: "https://learn.microsoft.com/en-us/azure/governance/management-groups/", type: "learn" }
                ]
            },
            {
                day: 59,
                title: "Hub-Spoke Network Architecture",
                subtitle: "Enterprise Network Patterns",
                activities: [
                    { time: "1 hr", title: "Hub-Spoke Topology", description: "Central control, distributed workloads", link: "https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke", type: "learn" },
                    { time: "1 hr", title: "Azure Virtual WAN", description: "Global transit network", link: "https://learn.microsoft.com/en-us/azure/virtual-wan/virtual-wan-about", type: "learn" },
                    { time: "1 hr", title: "🛠️ Design Hub-Spoke Architecture", description: "Create network design document", type: "hands-on" }
                ]
            },
            {
                day: 60,
                title: "Multi-Cloud & Hybrid Security",
                subtitle: "Securing Distributed Environments",
                activities: [
                    { time: "1 hr", title: "Hybrid Cloud Security", description: "On-premises to cloud security", link: "https://learn.microsoft.com/en-us/azure/architecture/hybrid/", type: "learn" },
                    { time: "1 hr", title: "Azure Arc for Security", description: "Managing hybrid resources", link: "https://learn.microsoft.com/en-us/azure/azure-arc/", type: "learn" },
                    { time: "1 hr", title: "Multi-Cloud Security Challenges", description: "Securing across cloud providers", link: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/multicloud-security-posture-management", type: "learn" }
                ]
            },
            {
                day: 61,
                title: "Compliance & Regulatory",
                subtitle: "Meeting Security Standards",
                activities: [
                    { time: "1 hr", title: "Azure Compliance Offerings", description: "Certifications and attestations", link: "https://learn.microsoft.com/en-us/azure/compliance/", type: "learn" },
                    { time: "1 hr", title: "GDPR, HIPAA, SOC 2", description: "Key regulatory frameworks", link: "https://learn.microsoft.com/en-us/compliance/regulatory/gdpr", type: "learn" },
                    { time: "1 hr", title: "Compliance Manager", description: "Tracking compliance posture", link: "https://learn.microsoft.com/en-us/microsoft-365/compliance/compliance-manager", type: "learn" }
                ]
            },
            {
                day: 62,
                title: "Security Architecture Documentation",
                subtitle: "Design Documents & Threat Models",
                activities: [
                    { time: "1 hr", title: "Security Architecture Documentation", description: "Creating security design docs", link: "https://learn.microsoft.com/en-us/azure/well-architected/security/security-design-principles", type: "learn" },
                    { time: "1 hr", title: "Threat Modeling", description: "Identifying and mitigating threats", link: "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool", type: "learn" },
                    { time: "1 hr", title: "📝 Create Security Design", description: "Document your architecture", type: "hands-on" }
                ]
            },
            {
                day: 63,
                title: "Architecture Lab",
                subtitle: "Design Complete Secure Architecture",
                activities: [
                    { time: "5 hrs", title: "🛠️ Complete Architecture Lab", description: "Design and document enterprise architecture", type: "lab" }
                ]
            }
        ]
    },
    10: {
        theme: "Advanced Security & Incident Response",
        description: "Handle complex security scenarios",
        days: [
            {
                day: 64,
                title: "Incident Response Framework",
                subtitle: "IR Procedures & Playbooks",
                activities: [
                    { time: "1 hr", title: "Incident Response Lifecycle", description: "Preparation, detection, containment, recovery", link: "https://learn.microsoft.com/en-us/security/operations/incident-response-overview", type: "learn" },
                    { time: "1 hr", title: "IR Playbooks", description: "Standardized response procedures", link: "https://learn.microsoft.com/en-us/security/operations/incident-response-playbooks", type: "learn" },
                    { time: "1 hr", title: "Communication & Escalation", description: "Stakeholder management during incidents", link: "https://learn.microsoft.com/en-us/security/operations/incident-response-playbooks", type: "learn" }
                ]
            },
            {
                day: 65,
                title: "Digital Forensics",
                subtitle: "Evidence Collection & Analysis",
                activities: [
                    { time: "1 hr", title: "Cloud Forensics Fundamentals", description: "Collecting evidence in Azure", link: "https://learn.microsoft.com/en-us/azure/architecture/example-scenario/forensics/", type: "learn" },
                    { time: "1 hr", title: "Memory & Disk Forensics", description: "Analyzing compromised systems", link: "https://learn.microsoft.com/en-us/azure/architecture/example-scenario/forensics/", type: "learn" },
                    { time: "1 hr", title: "Log Analysis for Investigations", description: "Finding evidence in logs", link: "https://learn.microsoft.com/en-us/azure/sentinel/investigate-cases", type: "learn" }
                ]
            },
            {
                day: 66,
                title: "Threat Intelligence",
                subtitle: "Using Intelligence for Defense",
                activities: [
                    { time: "1 hr", title: "Threat Intelligence Fundamentals", description: "Types and sources of intel", link: "https://learn.microsoft.com/en-us/azure/sentinel/understand-threat-intelligence", type: "learn" },
                    { time: "1 hr", title: "Microsoft Threat Intelligence", description: "Defender Threat Intelligence", link: "https://learn.microsoft.com/en-us/defender/threat-intelligence/", type: "learn" },
                    { time: "1 hr", title: "🛠️ Integrate Threat Intel", description: "Add TI feeds to Sentinel", type: "hands-on" }
                ]
            },
            {
                day: 67,
                title: "Advanced Threat Hunting",
                subtitle: "Proactive Security Operations",
                activities: [
                    { time: "1.5 hrs", title: "Advanced KQL for Hunting", description: "Complex queries for threat detection", link: "https://learn.microsoft.com/en-us/azure/sentinel/kusto-overview", type: "learn" },
                    { time: "1 hr", title: "Behavioral Analytics", description: "UEBA and anomaly detection", link: "https://learn.microsoft.com/en-us/azure/sentinel/identify-threats-with-entity-behavior-analytics", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ Advanced Hunting Exercise", description: "Hunt for advanced threats", type: "hands-on" }
                ]
            },
            {
                day: 68,
                title: "Security Automation",
                subtitle: "Infrastructure as Code Security",
                activities: [
                    { time: "1 hr", title: "Security as Code", description: "Automating security controls", link: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-as-code", type: "learn" },
                    { time: "1 hr", title: "ARM/Bicep Security", description: "Secure infrastructure templates", link: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview", type: "learn" },
                    { time: "1 hr", title: "🛠️ Create Secure Templates", description: "Build security-hardened IaC", type: "hands-on" }
                ]
            },
            {
                day: 69,
                title: "Business Continuity & DR",
                subtitle: "Resilience & Recovery Planning",
                activities: [
                    { time: "1 hr", title: "BCP/DR Planning", description: "Business continuity fundamentals", link: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview", type: "learn" },
                    { time: "1 hr", title: "RTO/RPO Requirements", description: "Defining recovery objectives", link: "https://learn.microsoft.com/en-us/azure/well-architected/resiliency/business-metrics", type: "learn" },
                    { time: "1 hr", title: "🛠️ Create DR Plan", description: "Document recovery procedures", type: "hands-on" }
                ]
            },
            {
                day: 70,
                title: "Advanced Security Lab",
                subtitle: "IR & Forensics Exercise",
                activities: [
                    { time: "5 hrs", title: "🛠️ Complete IR Lab", description: "Incident response tabletop exercise", type: "lab" }
                ]
            }
        ]
    },
    11: {
        theme: "Certification Preparation",
        description: "Prepare for AZ-500 and beyond",
        days: [
            {
                day: 71,
                title: "AZ-500 Domain 1 Review",
                subtitle: "Manage Identity & Access (25-30%)",
                activities: [
                    { time: "2 hrs", title: "Identity Review", description: "Entra ID, RBAC, PIM, CA", type: "review" },
                    { time: "1 hr", title: "Practice Questions", description: "Domain 1 practice", link: "https://learn.microsoft.com/en-us/certifications/exams/az-500/practice/assessment?assessment-type=practice&assessmentId=57", type: "practice" }
                ]
            },
            {
                day: 72,
                title: "AZ-500 Domain 2 Review",
                subtitle: "Secure Networking (20-25%)",
                activities: [
                    { time: "2 hrs", title: "Network Security Review", description: "NSG, Firewall, WAF, Private Link", type: "review" },
                    { time: "1 hr", title: "Practice Questions", description: "Domain 2 practice", type: "practice" }
                ]
            },
            {
                day: 73,
                title: "AZ-500 Domain 3 Review",
                subtitle: "Secure Compute, Storage, Databases (20-25%)",
                activities: [
                    { time: "2 hrs", title: "Data & Compute Review", description: "Key Vault, encryption, SQL security", type: "review" },
                    { time: "1 hr", title: "Practice Questions", description: "Domain 3 practice", type: "practice" }
                ]
            },
            {
                day: 74,
                title: "AZ-500 Domain 4 Review",
                subtitle: "Manage Security Operations (25-30%)",
                activities: [
                    { time: "2 hrs", title: "Security Operations Review", description: "Defender, Sentinel, monitoring", type: "review" },
                    { time: "1 hr", title: "Practice Questions", description: "Domain 4 practice", type: "practice" }
                ]
            },
            {
                day: 75,
                title: "Full Practice Exams",
                subtitle: "Test Readiness",
                activities: [
                    { time: "2 hrs", title: "Practice Exam 1", description: "Full-length practice test", type: "practice" },
                    { time: "2 hrs", title: "Review & Gap Analysis", description: "Identify weak areas", type: "review" }
                ]
            },
            {
                day: 76,
                title: "Final Review",
                subtitle: "Last Preparation",
                activities: [
                    { time: "2 hrs", title: "Weak Area Focus", description: "Review identified gaps", type: "review" },
                    { time: "1 hr", title: "Exam Tips & Strategy", description: "Test-taking strategies", type: "review" }
                ]
            },
            {
                day: 77,
                title: "🎯 AZ-500 Exam Day",
                subtitle: "Become Azure Security Engineer!",
                activities: [
                    { time: "1 hr", title: "Final Prep", description: "Light review, confidence building", type: "review" },
                    { time: "3 hrs", title: "🎯 Take AZ-500 Exam", description: "You've got this!", link: "https://learn.microsoft.com/en-us/certifications/azure-security-engineer/", type: "exam" }
                ]
            }
        ]
    },
    12: {
        theme: "Capstone Projects & Career Prep",
        description: "Build portfolio and prepare for career",
        days: [
            {
                day: 78,
                title: "Capstone Project 1",
                subtitle: "Secure Enterprise Landing Zone",
                activities: [
                    { time: "5 hrs", title: "🏗️ Build Landing Zone", description: "Complete enterprise security architecture", type: "project" }
                ]
            },
            {
                day: 79,
                title: "Capstone Project 2",
                subtitle: "Secure AI Application",
                activities: [
                    { time: "5 hrs", title: "🏗️ Build Secure AI App", description: "Production AI with all security controls", type: "project" }
                ]
            },
            {
                day: 80,
                title: "Capstone Project 3",
                subtitle: "SOC Setup & Automation",
                activities: [
                    { time: "5 hrs", title: "🏗️ Build SOC Environment", description: "Complete security operations center", type: "project" }
                ]
            },
            {
                day: 81,
                title: "Portfolio Development",
                subtitle: "Document Your Work",
                activities: [
                    { time: "2 hrs", title: "GitHub Portfolio", description: "Create security portfolio repo", type: "hands-on" },
                    { time: "2 hrs", title: "Documentation", description: "Write project documentation", type: "hands-on" }
                ]
            },
            {
                day: 82,
                title: "Interview Preparation",
                subtitle: "Technical & Behavioral",
                activities: [
                    { time: "2 hrs", title: "Common Interview Questions", description: "Security engineer interview prep", type: "learn" },
                    { time: "2 hrs", title: "Scenario-Based Questions", description: "Practice incident scenarios", type: "practice" }
                ]
            },
            {
                day: 83,
                title: "Career Planning",
                subtitle: "Next Steps & Continuous Learning",
                activities: [
                    { time: "1 hr", title: "Career Path Options", description: "Security architect, pentester, CISO paths", type: "learn" },
                    { time: "1 hr", title: "Next Certifications", description: "SC-200, AZ-305, CISSP", type: "learn" },
                    { time: "1 hr", title: "Community Engagement", description: "Conferences, meetups, contributions", type: "learn" }
                ]
            },
            {
                day: 84,
                title: "AZ-500 Exam Day",
                subtitle: "Become Azure Security Engineer!",
                activities: [
                    { time: "1 hr", title: "Final Review", description: "Light review before exam", type: "review" },
                    { time: "3 hrs", title: "🎯 Take AZ-500 Exam", description: "You've got this!", link: "https://learn.microsoft.com/en-us/certifications/azure-security-engineer/", type: "exam" }
                ]
            }
        ]
    },
    13: {
        theme: "Web Application Penetration Testing",
        description: "Master ethical hacking and web vulnerability exploitation",
        days: [
            {
                day: 85,
                title: "Penetration Testing Fundamentals",
                subtitle: "Methodology, Scope & Legal Considerations",
                activities: [
                    { time: "1 hr", title: "Pentesting Methodology", description: "PTES, OWASP Testing Guide phases", link: "https://owasp.org/www-project-web-security-testing-guide/", type: "learn" },
                    { time: "1 hr", title: "Legal & Ethical Considerations", description: "Authorization, scope, rules of engagement", link: "https://www.eccouncil.org/ethical-hacking/", type: "learn" },
                    { time: "1 hr", title: "Setting Up Your Lab", description: "Kali Linux, OWASP WebGoat, DVWA", link: "https://owasp.org/www-project-webgoat/", type: "hands-on" }
                ]
            },
            {
                day: 86,
                title: "Burp Suite Mastery",
                subtitle: "The Essential Web Security Testing Tool",
                activities: [
                    { time: "1.5 hrs", title: "Burp Suite Setup & Interface", description: "Proxy, scanner, intruder, repeater", link: "https://portswigger.net/burp/documentation", type: "learn" },
                    { time: "1.5 hrs", title: "Intercepting & Modifying Requests", description: "Proxy configuration, request manipulation", link: "https://portswigger.net/web-security", type: "hands-on" },
                    { time: "1 hr", title: "🛠️ Burp Suite Labs", description: "Complete PortSwigger Academy basics", link: "https://portswigger.net/web-security/all-labs", type: "lab" }
                ]
            },
            {
                day: 87,
                title: "SQL Injection Deep Dive",
                subtitle: "Detection, Exploitation & Prevention",
                activities: [
                    { time: "1 hr", title: "SQL Injection Types", description: "In-band, blind, out-of-band SQLi", link: "https://portswigger.net/web-security/sql-injection", type: "learn" },
                    { time: "1.5 hrs", title: "SQLi Exploitation Techniques", description: "UNION attacks, error-based, time-based", link: "https://portswigger.net/web-security/sql-injection/union-attacks", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ SQLi Labs", description: "Exploit vulnerable applications", link: "https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data", type: "lab" }
                ]
            },
            {
                day: 88,
                title: "Cross-Site Scripting (XSS)",
                subtitle: "Reflected, Stored & DOM-based XSS",
                activities: [
                    { time: "1 hr", title: "XSS Attack Types", description: "Reflected, stored, DOM-based XSS", link: "https://portswigger.net/web-security/cross-site-scripting", type: "learn" },
                    { time: "1 hr", title: "XSS Payloads & Bypass Techniques", description: "Filter evasion, encoding tricks", link: "https://portswigger.net/web-security/cross-site-scripting/cheat-sheet", type: "learn" },
                    { time: "1 hr", title: "XSS Prevention", description: "Output encoding, CSP, sanitization", link: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html", type: "learn" },
                    { time: "1 hr", title: "🛠️ XSS Labs", description: "Practice XSS attacks", link: "https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded", type: "lab" }
                ]
            },
            {
                day: 89,
                title: "Authentication Attacks",
                subtitle: "Breaking Login Mechanisms",
                activities: [
                    { time: "1 hr", title: "Authentication Vulnerabilities", description: "Brute force, credential stuffing, weak passwords", link: "https://portswigger.net/web-security/authentication", type: "learn" },
                    { time: "1 hr", title: "Session Management Attacks", description: "Session hijacking, fixation, prediction", link: "https://portswigger.net/web-security/authentication/other-mechanisms", type: "learn" },
                    { time: "1 hr", title: "Multi-Factor Authentication Bypass", description: "MFA vulnerabilities and bypasses", link: "https://portswigger.net/web-security/authentication/multi-factor", type: "learn" },
                    { time: "1 hr", title: "🛠️ Auth Attack Labs", description: "Break authentication mechanisms", link: "https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-different-responses", type: "lab" }
                ]
            },
            {
                day: 90,
                title: "Access Control & IDOR",
                subtitle: "Broken Access Control Exploitation",
                activities: [
                    { time: "1 hr", title: "Access Control Concepts", description: "Horizontal vs vertical privilege escalation", link: "https://portswigger.net/web-security/access-control", type: "learn" },
                    { time: "1 hr", title: "IDOR Vulnerabilities", description: "Insecure Direct Object References", link: "https://portswigger.net/web-security/access-control/idor", type: "learn" },
                    { time: "1 hr", title: "Privilege Escalation Techniques", description: "Role manipulation, parameter tampering", link: "https://portswigger.net/web-security/access-control/lab-user-role-controlled-by-request-parameter", type: "learn" },
                    { time: "1 hr", title: "🛠️ Access Control Labs", description: "Exploit broken access controls", link: "https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality", type: "lab" }
                ]
            },
            {
                day: 91,
                title: "Week 13 Lab: Web Pentesting",
                subtitle: "Complete Web Application Assessment",
                activities: [
                    { time: "5 hrs", title: "🛠️ Full Web Pentest Lab", description: "Complete assessment of DVWA/WebGoat", type: "lab" }
                ]
            }
        ]
    },
    14: {
        theme: "Advanced Web Attacks & Security Tools",
        description: "Master advanced exploitation and professional security tools",
        days: [
            {
                day: 92,
                title: "CSRF & Clickjacking",
                subtitle: "Cross-Site Request Forgery Attacks",
                activities: [
                    { time: "1 hr", title: "CSRF Attack Mechanics", description: "How CSRF works, impact assessment", link: "https://portswigger.net/web-security/csrf", type: "learn" },
                    { time: "1 hr", title: "CSRF Token Bypass", description: "Token validation flaws, SameSite cookies", link: "https://portswigger.net/web-security/csrf/bypassing-token-validation", type: "learn" },
                    { time: "1 hr", title: "Clickjacking Attacks", description: "UI redressing, frame busting bypass", link: "https://portswigger.net/web-security/clickjacking", type: "learn" },
                    { time: "1 hr", title: "🛠️ CSRF/Clickjacking Labs", description: "Exploit CSRF vulnerabilities", link: "https://portswigger.net/web-security/csrf/lab-no-defenses", type: "lab" }
                ]
            },
            {
                day: 93,
                title: "Server-Side Vulnerabilities",
                subtitle: "SSRF, XXE & File Inclusion",
                activities: [
                    { time: "1 hr", title: "SSRF Attacks", description: "Server-Side Request Forgery exploitation", link: "https://portswigger.net/web-security/ssrf", type: "learn" },
                    { time: "1 hr", title: "XXE Injection", description: "XML External Entity attacks", link: "https://portswigger.net/web-security/xxe", type: "learn" },
                    { time: "1 hr", title: "File Inclusion (LFI/RFI)", description: "Local and remote file inclusion", link: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/11.1-Testing_for_Local_File_Inclusion", type: "learn" },
                    { time: "1 hr", title: "🛠️ Server-Side Labs", description: "Exploit SSRF and XXE", link: "https://portswigger.net/web-security/ssrf/lab-basic-ssrf-against-localhost", type: "lab" }
                ]
            },
            {
                day: 94,
                title: "Injection Attacks Beyond SQLi",
                subtitle: "Command, LDAP, NoSQL & Template Injection",
                activities: [
                    { time: "1 hr", title: "OS Command Injection", description: "Executing system commands", link: "https://portswigger.net/web-security/os-command-injection", type: "learn" },
                    { time: "1 hr", title: "NoSQL Injection", description: "MongoDB and other NoSQL attacks", link: "https://portswigger.net/web-security/nosql-injection", type: "learn" },
                    { time: "1 hr", title: "Server-Side Template Injection", description: "SSTI exploitation", link: "https://portswigger.net/web-security/server-side-template-injection", type: "learn" },
                    { time: "1 hr", title: "🛠️ Injection Labs", description: "Practice various injection types", link: "https://portswigger.net/web-security/os-command-injection/lab-simple", type: "lab" }
                ]
            },
            {
                day: 95,
                title: "OWASP ZAP & Automation",
                subtitle: "Automated Security Scanning",
                activities: [
                    { time: "1.5 hrs", title: "OWASP ZAP Setup & Usage", description: "Automated scanning, spidering", link: "https://www.zaproxy.org/docs/", type: "learn" },
                    { time: "1 hr", title: "Automated vs Manual Testing", description: "When to use each approach", link: "https://www.zaproxy.org/docs/desktop/start/", type: "learn" },
                    { time: "1.5 hrs", title: "🛠️ ZAP Scanning Lab", description: "Scan vulnerable applications", link: "https://www.zaproxy.org/docs/desktop/addons/", type: "lab" }
                ]
            },
            {
                day: 96,
                title: "Security Headers & Client-Side",
                subtitle: "Browser Security Mechanisms",
                activities: [
                    { time: "1 hr", title: "HTTP Security Headers", description: "CSP, HSTS, X-Frame-Options, etc.", link: "https://owasp.org/www-project-secure-headers/", type: "learn" },
                    { time: "1 hr", title: "Content Security Policy Deep Dive", description: "CSP configuration and bypass", link: "https://portswigger.net/web-security/cross-site-scripting/content-security-policy", type: "learn" },
                    { time: "1 hr", title: "CORS Vulnerabilities", description: "Cross-Origin Resource Sharing issues", link: "https://portswigger.net/web-security/cors", type: "learn" },
                    { time: "1 hr", title: "🛠️ Headers Analysis", description: "Analyze real-world applications", type: "hands-on" }
                ]
            },
            {
                day: 97,
                title: "JWT & Token Security",
                subtitle: "Attacking JSON Web Tokens",
                activities: [
                    { time: "1 hr", title: "JWT Structure & Security", description: "Understanding JWT vulnerabilities", link: "https://portswigger.net/web-security/jwt", type: "learn" },
                    { time: "1 hr", title: "JWT Attack Techniques", description: "Algorithm confusion, key injection", link: "https://portswigger.net/web-security/jwt/algorithm-confusion", type: "learn" },
                    { time: "1 hr", title: "OAuth Vulnerabilities", description: "OAuth flow attacks", link: "https://portswigger.net/web-security/oauth", type: "learn" },
                    { time: "1 hr", title: "🛠️ JWT Labs", description: "Attack JWT implementations", link: "https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-unverified-signature", type: "lab" }
                ]
            },
            {
                day: 98,
                title: "Week 14 Lab: Advanced Pentesting",
                subtitle: "PortSwigger Academy Challenge",
                activities: [
                    { time: "5 hrs", title: "🛠️ Complete PortSwigger Labs", description: "Finish 20+ PortSwigger Academy labs", link: "https://portswigger.net/web-security/all-labs", type: "lab" }
                ]
            }
        ]
    },
    15: {
        theme: "Secure Code Review & Bug Bounty",
        description: "Find vulnerabilities in source code and earn bounties",
        days: [
            {
                day: 99,
                title: "Secure Code Review Fundamentals",
                subtitle: "Finding Vulnerabilities in Source Code",
                activities: [
                    { time: "1 hr", title: "Code Review Methodology", description: "Manual review techniques", link: "https://owasp.org/www-project-code-review-guide/", type: "learn" },
                    { time: "1 hr", title: "Common Vulnerability Patterns", description: "Recognizing insecure code", link: "https://cwe.mitre.org/top25/archive/2023/2023_top25_list.html", type: "learn" },
                    { time: "1 hr", title: "SAST Tools Introduction", description: "Semgrep, SonarQube, CodeQL", link: "https://semgrep.dev/docs/", type: "learn" },
                    { time: "1 hr", title: "🛠️ Review Vulnerable Code", description: "Find bugs in sample code", type: "hands-on" }
                ]
            },
            {
                day: 100,
                title: "Language-Specific Vulnerabilities",
                subtitle: "Python, JavaScript, Java Security",
                activities: [
                    { time: "1 hr", title: "Python Security Issues", description: "Pickle, eval, injection patterns", link: "https://cheatsheetseries.owasp.org/cheatsheets/Python_Security_Cheat_Sheet.html", type: "learn" },
                    { time: "1 hr", title: "JavaScript Security", description: "Prototype pollution, XSS sinks", link: "https://portswigger.net/web-security/prototype-pollution", type: "learn" },
                    { time: "1 hr", title: "Java/C# Security Patterns", description: "Deserialization, injection", link: "https://portswigger.net/web-security/deserialization", type: "learn" },
                    { time: "1 hr", title: "🛠️ Code Review Exercise", description: "Review multi-language project", type: "hands-on" }
                ]
            },
            {
                day: 101,
                title: "Bug Bounty Fundamentals",
                subtitle: "Getting Started with Bug Hunting",
                activities: [
                    { time: "1 hr", title: "Bug Bounty Platforms", description: "HackerOne, Bugcrowd, Intigriti", link: "https://www.hackerone.com/", type: "learn" },
                    { time: "1 hr", title: "Choosing Programs", description: "Scope analysis, finding targets", link: "https://www.bugcrowd.com/", type: "learn" },
                    { time: "1 hr", title: "Recon Methodology", description: "Subdomain enum, asset discovery", link: "https://github.com/projectdiscovery/nuclei", type: "learn" },
                    { time: "1 hr", title: "Writing Quality Reports", description: "POC, impact, reproduction steps", link: "https://docs.hackerone.com/hackers/quality-reports.html", type: "learn" }
                ]
            },
            {
                day: 102,
                title: "Reconnaissance Tools",
                subtitle: "Information Gathering for Bug Bounty",
                activities: [
                    { time: "1 hr", title: "Subdomain Enumeration", description: "Amass, Subfinder, Assetfinder", link: "https://github.com/OWASP/Amass", type: "learn" },
                    { time: "1 hr", title: "Content Discovery", description: "Ffuf, Gobuster, directory brute forcing", link: "https://github.com/ffuf/ffuf", type: "learn" },
                    { time: "1 hr", title: "JavaScript Analysis", description: "Finding endpoints, secrets in JS", link: "https://github.com/AzizKpln/JS-Analyzer", type: "learn" },
                    { time: "1 hr", title: "🛠️ Recon a Real Target", description: "Practice on bug bounty program", type: "hands-on" }
                ]
            },
            {
                day: 103,
                title: "Mobile Application Security",
                subtitle: "Android & iOS Security Basics",
                activities: [
                    { time: "1 hr", title: "Mobile App Security Overview", description: "OWASP Mobile Top 10", link: "https://owasp.org/www-project-mobile-top-10/", type: "learn" },
                    { time: "1 hr", title: "Android Security Basics", description: "APK analysis, certificate pinning", link: "https://mas.owasp.org/MASTG/", type: "learn" },
                    { time: "1 hr", title: "Intercepting Mobile Traffic", description: "Proxy setup, SSL pinning bypass", link: "https://mas.owasp.org/MASTG/techniques/android/", type: "learn" },
                    { time: "1 hr", title: "🛠️ Analyze Sample Apps", description: "Basic mobile app testing", type: "hands-on" }
                ]
            },
            {
                day: 104,
                title: "CTF Practice",
                subtitle: "Capture The Flag Challenges",
                activities: [
                    { time: "1 hr", title: "CTF Platforms Overview", description: "HackTheBox, TryHackMe, PicoCTF", link: "https://www.hackthebox.com/", type: "learn" },
                    { time: "3 hrs", title: "🛠️ Complete CTF Challenges", description: "Solve web security challenges", link: "https://tryhackme.com/", type: "lab" }
                ]
            },
            {
                day: 105,
                title: "Week 15 Lab: Bug Bounty Hunting",
                subtitle: "Real-World Vulnerability Research",
                activities: [
                    { time: "5 hrs", title: "🛠️ Bug Bounty Hunt", description: "Hunt on a real program with permission", type: "lab" }
                ]
            }
        ]
    },
    16: {
        theme: "Multi-Cloud Security & Graduation",
        description: "Expand to AWS/GCP and complete your journey",
        days: [
            {
                day: 106,
                title: "AWS Security Fundamentals",
                subtitle: "Amazon Web Services Security Essentials",
                activities: [
                    { time: "1 hr", title: "AWS Security Overview", description: "Shared responsibility, core services", link: "https://aws.amazon.com/security/", type: "learn" },
                    { time: "1 hr", title: "AWS IAM Deep Dive", description: "Users, roles, policies, best practices", link: "https://docs.aws.amazon.com/IAM/latest/UserGuide/", type: "learn" },
                    { time: "1 hr", title: "AWS Security Services", description: "GuardDuty, Security Hub, Config", link: "https://aws.amazon.com/products/security/", type: "learn" },
                    { time: "1 hr", title: "🛠️ AWS Security Lab", description: "Configure IAM and security services", type: "hands-on" }
                ]
            },
            {
                day: 107,
                title: "AWS Network & Data Security",
                subtitle: "VPC Security & Encryption",
                activities: [
                    { time: "1 hr", title: "VPC Security", description: "Security groups, NACLs, flow logs", link: "https://docs.aws.amazon.com/vpc/latest/userguide/", type: "learn" },
                    { time: "1 hr", title: "AWS KMS & Secrets Manager", description: "Encryption key management", link: "https://docs.aws.amazon.com/kms/latest/developerguide/", type: "learn" },
                    { time: "1 hr", title: "S3 Security", description: "Bucket policies, encryption, access", link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html", type: "learn" },
                    { time: "1 hr", title: "AWS vs Azure Comparison", description: "Mapping services between clouds", type: "learn" }
                ]
            },
            {
                day: 108,
                title: "GCP Security Fundamentals",
                subtitle: "Google Cloud Platform Security",
                activities: [
                    { time: "1 hr", title: "GCP Security Overview", description: "Resource hierarchy, IAM model", link: "https://cloud.google.com/security", type: "learn" },
                    { time: "1 hr", title: "GCP IAM & Organization", description: "Roles, service accounts, policies", link: "https://cloud.google.com/iam/docs/", type: "learn" },
                    { time: "1 hr", title: "GCP Security Services", description: "Security Command Center, DLP", link: "https://cloud.google.com/security/products", type: "learn" },
                    { time: "1 hr", title: "Multi-Cloud Security Strategy", description: "Managing security across clouds", type: "learn" }
                ]
            },
            {
                day: 109,
                title: "Final Capstone Project",
                subtitle: "Build Complete Security Architecture",
                activities: [
                    { time: "5 hrs", title: "🏗️ Enterprise Security Architecture", description: "Design and document multi-cloud security", type: "project" }
                ]
            },
            {
                day: 110,
                title: "Portfolio & Career Prep",
                subtitle: "Showcase Your Skills",
                activities: [
                    { time: "2 hrs", title: "GitHub Portfolio", description: "Create comprehensive security portfolio", type: "hands-on" },
                    { time: "1 hr", title: "LinkedIn Optimization", description: "Update profile with new skills", type: "hands-on" },
                    { time: "1 hr", title: "Resume for Security Roles", description: "Tailor resume for security positions", type: "hands-on" }
                ]
            },
            {
                day: 111,
                title: "Interview Preparation",
                subtitle: "Ace Your Security Interviews",
                activities: [
                    { time: "1.5 hrs", title: "Technical Interview Questions", description: "Common security interview topics", link: "https://github.com/security-prince/Application-Security-Engineer-Interview-Questions", type: "learn" },
                    { time: "1.5 hrs", title: "Scenario-Based Questions", description: "How would you secure...", type: "practice" },
                    { time: "1 hr", title: "Mock Interviews", description: "Practice with peers or AI", type: "practice" }
                ]
            },
            {
                day: 112,
                title: "🎓 Graduation Day!",
                subtitle: "You're Now a Security Expert!",
                activities: [
                    { time: "1 hr", title: "🎉 Celebrate Your Journey", description: "Review your 16-week transformation", type: "milestone" },
                    { time: "1 hr", title: "📝 Future Learning Path", description: "Plan OSCP, CISSP, or specialization", type: "hands-on" },
                    { time: "1 hr", title: "🌟 Join the Community", description: "Connect with security professionals", link: "https://discord.gg/cybersecurity", type: "hands-on" },
                    { time: "1 hr", title: "🚀 Start Applying!", description: "Apply for security roles", type: "milestone" }
                ]
            }
        ]
    }
};

// ============================================
// COMPREHENSIVE LABS DATA
// ============================================

const LABS_DATA = [
    {
        id: 1,
        title: "Identity & Access Management",
        description: "Complete identity configuration including Entra ID, RBAC, Conditional Access, and PIM",
        topics: ["Entra ID", "RBAC", "PIM", "Conditional Access", "MFA", "Identity Protection"],
        duration: "4-5 hours",
        week: 2
    },
    {
        id: 2,
        title: "Network Security Architecture",
        description: "Build hub-spoke network with NSGs, Azure Firewall, WAF, and Private Endpoints",
        topics: ["VNets", "NSGs", "Azure Firewall", "WAF", "Private Link", "Bastion", "DDoS"],
        duration: "5-6 hours",
        week: 3
    },
    {
        id: 3,
        title: "Data Security & Protection",
        description: "Implement encryption, Key Vault, database security, and backup strategies",
        topics: ["Key Vault", "Encryption", "SQL Security", "TDE", "Backup", "Purview"],
        duration: "4-5 hours",
        week: 4
    },
    {
        id: 10,
        title: "Web Application Penetration Testing",
        description: "Complete web application security assessment using professional tools",
        topics: ["Burp Suite", "SQL Injection", "XSS", "Authentication Attacks", "IDOR", "Access Control"],
        duration: "6-8 hours",
        week: 13
    },
    {
        id: 11,
        title: "Advanced Web Attacks",
        description: "Exploit advanced vulnerabilities including SSRF, XXE, CSRF, and JWT attacks",
        topics: ["CSRF", "SSRF", "XXE", "Template Injection", "JWT Attacks", "OWASP ZAP"],
        duration: "6-8 hours",
        week: 14
    },
    {
        id: 12,
        title: "Bug Bounty Hunting",
        description: "Real-world vulnerability research on authorized bug bounty programs",
        topics: ["Reconnaissance", "Bug Bounty Platforms", "Report Writing", "Mobile Security", "CTF"],
        duration: "5-6 hours",
        week: 15
    },
    {
        id: 13,
        title: "Multi-Cloud Security",
        description: "Implement security controls across AWS, GCP, and Azure",
        topics: ["AWS IAM", "AWS VPC", "GCP IAM", "Multi-Cloud Strategy", "Cloud Comparison"],
        duration: "5-6 hours",
        week: 16
    },
    {
        id: 4,
        title: "Application Security & DevSecOps",
        description: "Secure application deployment with containers, managed identity, and CI/CD security",
        topics: ["Container Security", "AKS", "Managed Identity", "DevSecOps", "API Security"],
        duration: "5-6 hours",
        week: 5
    },
    {
        id: 5,
        title: "Security Operations Center",
        description: "Deploy Defender for Cloud and Microsoft Sentinel with detection and response",
        topics: ["Defender for Cloud", "Sentinel", "Analytics Rules", "Playbooks", "Hunting"],
        duration: "5-6 hours",
        week: 6
    },
    {
        id: 6,
        title: "AI Security Assessment",
        description: "Assess AI system security including prompt injection testing and content filtering",
        topics: ["AI Red Teaming", "Prompt Injection", "Content Filtering", "AI Monitoring"],
        duration: "4-5 hours",
        week: 7
    },
    {
        id: 7,
        title: "Azure AI Security Implementation",
        description: "Deploy secure Azure OpenAI and ML services with enterprise controls",
        topics: ["Azure OpenAI", "Azure ML", "Private Endpoints", "Managed Identity", "Audit Logging"],
        duration: "5-6 hours",
        week: 8
    },
    {
        id: 8,
        title: "Enterprise Architecture Design",
        description: "Design complete enterprise security architecture with documentation",
        topics: ["Zero Trust", "Landing Zones", "Hub-Spoke", "Threat Modeling", "Compliance"],
        duration: "5-6 hours",
        week: 9
    },
    {
        id: 9,
        title: "Incident Response Exercise",
        description: "Tabletop exercise for incident response including forensics and recovery",
        topics: ["IR Playbooks", "Forensics", "Threat Hunting", "Recovery", "Communication"],
        duration: "4-5 hours",
        week: 10
    }
];

// ============================================
// CAPSTONE PROJECTS
// ============================================

const PROJECT_DATA = {
    title: "Secure AI-Powered Enterprise Application",
    description: "Build a production-grade secure Azure environment with Zero Trust architecture hosting AI services",
    phases: [
        {
            number: 1,
            title: "Enterprise Foundation",
            duration: "3 hours",
            tasks: [
                "Design management group hierarchy",
                "Create Azure landing zone structure",
                "Configure Azure Policy for security",
                "Set up diagnostic settings and logging"
            ]
        },
        {
            number: 2,
            title: "Network Security Layer",
            duration: "3 hours",
            tasks: [
                "Deploy hub-spoke network architecture",
                "Configure Azure Firewall with policies",
                "Set up Network Security Groups",
                "Implement Private DNS zones"
            ]
        },
        {
            number: 3,
            title: "Identity Security Layer",
            duration: "2 hours",
            tasks: [
                "Configure Conditional Access policies",
                "Set up Privileged Identity Management",
                "Create custom RBAC roles",
                "Enable Identity Protection"
            ]
        },
        {
            number: 4,
            title: "Data Security Layer",
            duration: "2 hours",
            tasks: [
                "Deploy Key Vault with private endpoint",
                "Configure customer-managed keys",
                "Enable storage encryption",
                "Set up database security"
            ]
        },
        {
            number: 5,
            title: "AI Services Security",
            duration: "3 hours",
            tasks: [
                "Deploy Azure OpenAI securely",
                "Configure content filtering",
                "Set up AI Gateway pattern",
                "Implement rate limiting and monitoring"
            ]
        },
        {
            number: 6,
            title: "Application Deployment",
            duration: "2 hours",
            tasks: [
                "Deploy App Service with VNet integration",
                "Configure managed identity",
                "Set up WAF policies",
                "Deploy sample AI application"
            ]
        },
        {
            number: 7,
            title: "Security Operations",
            duration: "3 hours",
            tasks: [
                "Enable Microsoft Defender for Cloud",
                "Deploy Microsoft Sentinel",
                "Create detection rules",
                "Build response playbooks"
            ]
        },
        {
            number: 8,
            title: "Documentation & Testing",
            duration: "2 hours",
            tasks: [
                "Document architecture decisions",
                "Create threat model",
                "Perform security testing",
                "Generate compliance report"
            ]
        }
    ]
};

// ============================================
// COMPREHENSIVE RESOURCES
// ============================================

const RESOURCES_DATA = {
    courses: [
        { icon: "🎓", title: "AZ-500 Learning Path", description: "Azure Security Engineer path", link: "https://learn.microsoft.com/training/paths/manage-identity-access/" },
        { icon: "🎓", title: "PortSwigger Web Security", description: "FREE - Best web security course", link: "https://portswigger.net/web-security" },
        { icon: "🎓", title: "TryHackMe", description: "Interactive pentesting labs", link: "https://tryhackme.com/" },
        { icon: "🎓", title: "HackTheBox Academy", description: "Advanced pentesting training", link: "https://academy.hackthebox.com/" },
        { icon: "🎓", title: "AI Security Fundamentals", description: "AI security concepts", link: "https://learn.microsoft.com/training/paths/ai-security-fundamentals/" },
        { icon: "🎓", title: "AWS Security Specialty", description: "AWS security path", link: "https://aws.amazon.com/certification/certified-security-specialty/" },
        { icon: "📚", title: "SANS Cloud Security", description: "Professional training", link: "https://www.sans.org/cloud-security/" },
        { icon: "📚", title: "PentesterLab", description: "Hands-on web hacking", link: "https://pentesterlab.com/" }
    ],
    videos: [
        { icon: "🎯", title: "OAuth & OpenID Connect Explained", description: "Complete OAuth/OIDC tutorial", link: "https://youtu.be/996OiexHze0?si=6XZ0v5_f90DkgNQd" },
        { icon: "🔐", title: "TLS 1.3 Deep Dive", description: "Understanding modern encryption", link: "https://youtu.be/yPdJVvSyMqk" },
        { icon: "🛡️", title: "Zero Trust Security", description: "Zero Trust architecture explained", link: "https://youtu.be/cuR05y_2Gxc" },
        { icon: "☸️", title: "Kubernetes Security", description: "K8s security fundamentals", link: "https://youtu.be/XUFVT8bGJhw" },
        { icon: "🤖", title: "AI Security Fundamentals", description: "AI/ML security concepts", link: "https://youtu.be/OYvlznJ4IZQ" },
        { icon: "🤖", title: "AI Agent Security", description: "Securing AI agents", link: "https://youtu.be/xdUR8-_P3DU" },
        { icon: "🔧", title: "SAST vs DAST Explained", description: "Security testing types", link: "https://youtube.com/shorts/r6cgHg7gMP4" },
        { icon: "🏗️", title: "Cybersecurity Architecture Series", description: "Complete architecture guide", link: "https://youtu.be/sesacY7Xz3c" },
        { icon: "▶️", title: "John Savill's AZ-500 Cram", description: "Azure exam preparation", link: "https://youtube.com/@NTFAQGuy" },
        { icon: "▶️", title: "Microsoft Security Channel", description: "Official Microsoft content", link: "https://youtube.com/@MicrosoftSecurity" }
    ],
    docs: [
        { icon: "📖", title: "Azure Security Documentation", description: "Official security best practices", link: "https://learn.microsoft.com/azure/security/" },
        { icon: "📖", title: "NIST Cybersecurity Framework", description: "Industry standard framework", link: "https://www.nist.gov/cyberframework" },
        { icon: "📖", title: "MITRE ATT&CK", description: "Adversary tactics and techniques", link: "https://attack.mitre.org/" },
        { icon: "📖", title: "OWASP Top 10", description: "Web application security risks", link: "https://owasp.org/www-project-top-ten/" },
        { icon: "📖", title: "OWASP LLM Top 10", description: "LLM security vulnerabilities", link: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
        { icon: "📖", title: "CIS Benchmarks", description: "Security configuration guides", link: "https://www.cisecurity.org/cis-benchmarks" }
    ],
    tools: [
        { icon: "🔧", title: "Burp Suite", description: "Web security testing tool", link: "https://portswigger.net/burp" },
        { icon: "🔧", title: "OWASP ZAP", description: "Free web app scanner", link: "https://www.zaproxy.org/" },
        { icon: "🔧", title: "SQLMap", description: "SQL injection automation", link: "https://sqlmap.org/" },
        { icon: "🔧", title: "Prowler", description: "Cloud security assessment", link: "https://github.com/prowler-cloud/prowler" },
        { icon: "🔧", title: "Nuclei", description: "Vulnerability scanner", link: "https://github.com/projectdiscovery/nuclei" },
        { icon: "🔧", title: "Semgrep", description: "Static code analysis", link: "https://semgrep.dev/" },
        { icon: "🔧", title: "Trivy", description: "Container security scanner", link: "https://github.com/aquasecurity/trivy" },
        { icon: "🔧", title: "Garak", description: "LLM vulnerability scanner", link: "https://github.com/leondz/garak" }
    ],
    community: [
        { icon: "💬", title: "r/AzureCertification", description: "Certification discussion", link: "https://reddit.com/r/AzureCertification" },
        { icon: "💬", title: "r/cybersecurity", description: "General security community", link: "https://reddit.com/r/cybersecurity" },
        { icon: "💬", title: "Microsoft Tech Community", description: "Official forums", link: "https://techcommunity.microsoft.com" },
        { icon: "💬", title: "Cloud Security Alliance", description: "Industry organization", link: "https://cloudsecurityalliance.org/" },
        { icon: "💬", title: "OWASP Community", description: "Application security", link: "https://owasp.org/community/" },
        { icon: "💬", title: "InfoSec Twitter/X", description: "Follow security researchers", link: "https://twitter.com/search?q=%23infosec" }
    ],
    certifications: [
        { icon: "🏆", title: "AZ-900 Azure Fundamentals", description: "Start here - cloud basics", link: "https://learn.microsoft.com/certifications/azure-fundamentals/" },
        { icon: "🏆", title: "SC-900 Security Fundamentals", description: "Security concepts foundation", link: "https://learn.microsoft.com/certifications/security-compliance-and-identity-fundamentals/" },
        { icon: "🏆", title: "AZ-500 Security Engineer", description: "Your main goal!", link: "https://learn.microsoft.com/certifications/azure-security-engineer/" },
        { icon: "🏆", title: "SC-200 Security Operations", description: "SOC analyst path", link: "https://learn.microsoft.com/certifications/security-operations-analyst/" },
        { icon: "🏆", title: "AZ-305 Solutions Architect", description: "Architecture path", link: "https://learn.microsoft.com/certifications/azure-solutions-architect/" },
        { icon: "🏆", title: "CISSP", description: "Industry gold standard", link: "https://www.isc2.org/Certifications/CISSP" }
    ]
};

// ============================================
// QUICK REFERENCE DATA
// ============================================

// ============================================
// COMPREHENSIVE SECURITY GLOSSARY
// ============================================

const GLOSSARY_DATA = {
    "fundamentals": {
        title: "🔐 Security Fundamentals",
        terms: [
            { term: "CIA Triad", definition: "The three pillars of information security: Confidentiality (keeping data secret), Integrity (ensuring data isn't altered), and Availability (ensuring systems are accessible)." },
            { term: "Threat", definition: "A potential danger that could exploit a vulnerability to cause harm. Example: A hacker attempting to steal data." },
            { term: "Vulnerability", definition: "A weakness in a system that can be exploited by a threat. Example: Unpatched software, weak passwords." },
            { term: "Risk", definition: "The probability of a threat exploiting a vulnerability multiplied by the impact. Risk = Threat × Vulnerability × Impact." },
            { term: "Threat Actor", definition: "An individual or group that performs malicious activities. Types include nation-states, cybercriminals, hacktivists, insiders, and script kiddies." },
            { term: "Attacker", definition: "A person who attempts to gain unauthorized access to systems. Can be internal (insider) or external." },
            { term: "Intruder", definition: "Someone who gains unauthorized access to a system or network. Different from attacker - intruder has already gained access." },
            { term: "Attack Vector", definition: "The path or method used by an attacker to gain access. Examples: phishing emails, malware, SQL injection." },
            { term: "Attack Surface", definition: "The total sum of vulnerabilities that can be exploited to carry out an attack. Reducing attack surface = better security." },
            { term: "Exploit", definition: "Code or technique that takes advantage of a vulnerability to cause unintended behavior." },
            { term: "Payload", definition: "The malicious code delivered by an exploit. Example: ransomware delivered after exploiting a vulnerability." },
            { term: "Zero-Day", definition: "A vulnerability unknown to the vendor with no patch available. Called 'zero-day' because developers have had zero days to fix it." },
            { term: "Defense in Depth", definition: "Security strategy using multiple layers of protection. If one layer fails, others still protect." },
            { term: "Least Privilege", definition: "Principle of giving users/systems only the minimum permissions needed to perform their tasks." },
            { term: "Need to Know", definition: "Access to information should only be granted to those who require it for their job function." },
            { term: "Security Control", definition: "A safeguard designed to protect assets. Types: Preventive, Detective, Corrective, Deterrent, Compensating." },
            { term: "Hardening", definition: "The process of securing a system by reducing its attack surface - removing unnecessary services, applying patches, etc." }
        ]
    },
    "cryptography": {
        title: "🔑 Cryptography & Encryption",
        terms: [
            { term: "Cryptography", definition: "The science of securing information by transforming it into an unreadable format. Only those with the key can decrypt it." },
            { term: "Encryption", definition: "The process of converting plaintext into ciphertext using an algorithm and key. Makes data unreadable without the key." },
            { term: "Decryption", definition: "The reverse of encryption - converting ciphertext back to plaintext using the correct key." },
            { term: "Plaintext", definition: "Original readable data before encryption. Also called cleartext." },
            { term: "Ciphertext", definition: "Encrypted data that appears as random characters. Unreadable without decryption." },
            { term: "Symmetric Encryption", definition: "Same key used for encryption and decryption. Fast but key distribution is challenging. Examples: AES, DES, 3DES." },
            { term: "Asymmetric Encryption", definition: "Uses key pairs (public + private). Public key encrypts, private key decrypts. Slower but solves key distribution. Examples: RSA, ECC." },
            { term: "AES (Advanced Encryption Standard)", definition: "Current gold standard symmetric encryption. Uses 128, 192, or 256-bit keys. Replaced DES. Used everywhere - HTTPS, disk encryption, VPNs." },
            { term: "DES (Data Encryption Standard)", definition: "Old symmetric encryption (1977) with 56-bit key. INSECURE - can be cracked in hours. Replaced by 3DES then AES." },
            { term: "AES vs DES", definition: "AES is modern (2001), uses 128-256 bit keys, very secure. DES is obsolete (1977), 56-bit key, easily cracked. Always use AES!" },
            { term: "3DES (Triple DES)", definition: "Applied DES three times with different keys. More secure than DES but slower than AES. Legacy systems only." },
            { term: "RSA", definition: "Asymmetric encryption algorithm using large prime numbers. Common key sizes: 2048, 4096 bits. Used in HTTPS, digital signatures." },
            { term: "ECC (Elliptic Curve Cryptography)", definition: "Asymmetric encryption using elliptic curves. Smaller keys than RSA for same security. 256-bit ECC ≈ 3072-bit RSA." },
            { term: "Hashing", definition: "One-way function that converts data to fixed-size digest. Cannot be reversed. Used for passwords, integrity checks." },
            { term: "SHA-256", definition: "Secure Hash Algorithm producing 256-bit hash. Part of SHA-2 family. Used in Bitcoin, SSL certificates, password storage." },
            { term: "MD5", definition: "Message Digest producing 128-bit hash. INSECURE - vulnerable to collisions. Never use for security - only checksums." },
            { term: "Salt", definition: "Random data added to password before hashing. Prevents rainbow table attacks. Each user should have unique salt." },
            { term: "Digital Signature", definition: "Cryptographic proof of authenticity. Created with private key, verified with public key. Provides non-repudiation." },
            { term: "PKI (Public Key Infrastructure)", definition: "System for managing digital certificates and public keys. Includes CAs, certificates, and trust chains." },
            { term: "Certificate Authority (CA)", definition: "Trusted entity that issues digital certificates. Verifies identity before issuing. Examples: DigiCert, Let's Encrypt." },
            { term: "SSL/TLS", definition: "Protocols for encrypted communication over networks. SSL is deprecated; TLS 1.2/1.3 is current standard for HTTPS." },
            { term: "Key Exchange", definition: "Process of securely sharing encryption keys. Diffie-Hellman allows two parties to create shared secret over insecure channel." },
            { term: "HSM (Hardware Security Module)", definition: "Physical device for secure key storage and cryptographic operations. Keys never leave the HSM." }
        ]
    },
    "authentication": {
        title: "🪪 Authentication & Authorization",
        terms: [
            { term: "Authentication (AuthN)", definition: "Verifying WHO you are. Proves identity. 'Are you who you claim to be?' Examples: passwords, biometrics, certificates." },
            { term: "Authorization (AuthZ)", definition: "Determining WHAT you can do. Grants permissions. 'What are you allowed to access?' Happens after authentication." },
            { term: "Authentication vs Authorization", definition: "Authentication = proving identity (login). Authorization = granting access (permissions). AuthN happens first, then AuthZ." },
            { term: "MFA (Multi-Factor Authentication)", definition: "Requires 2+ factors: Something you know (password), have (phone), or are (fingerprint). Much more secure than password alone." },
            { term: "2FA (Two-Factor Authentication)", definition: "Specific type of MFA using exactly two factors. Example: password + SMS code." },
            { term: "OAuth 2.0", definition: "Authorization framework allowing third-party apps to access resources without sharing passwords. Uses access tokens. 'Login with Google' uses OAuth." },
            { term: "OAuth Flow", definition: "Authorization Code (most secure, for server apps), Implicit (deprecated), Client Credentials (service-to-service), Device Code (IoT/TV)." },
            { term: "OpenID Connect (OIDC)", definition: "Identity layer on top of OAuth 2.0. Adds authentication to OAuth's authorization. Returns ID token with user info." },
            { term: "SAML", definition: "Security Assertion Markup Language. XML-based SSO protocol. Older than OAuth/OIDC. Common in enterprise for SSO." },
            { term: "SSO (Single Sign-On)", definition: "One login grants access to multiple applications. Improves UX and security. Examples: Microsoft Entra ID, Okta." },
            { term: "Federation", definition: "Trust relationship between identity providers. Allows users from one org to access resources in another." },
            { term: "Access Token", definition: "Credential proving authorization. Short-lived (minutes/hours). Used to access APIs and resources." },
            { term: "Refresh Token", definition: "Long-lived token used to obtain new access tokens without re-authentication. Should be stored securely." },
            { term: "ID Token", definition: "JWT containing user identity information in OIDC. Contains claims about the user." },
            { term: "JWT (JSON Web Token)", definition: "Compact, URL-safe token format. Contains header, payload (claims), signature. Used in modern auth systems." },
            { term: "Claims", definition: "Statements about a user in a token. Examples: name, email, roles, permissions." },
            { term: "RBAC (Role-Based Access Control)", definition: "Access based on assigned roles. User → Role → Permissions. Simplifies management. Example: Admin, Editor, Viewer roles." },
            { term: "ABAC (Attribute-Based Access Control)", definition: "Access based on attributes (user, resource, environment). More flexible than RBAC. Example: 'Allow if department=Finance AND time=business hours'." },
            { term: "ACL (Access Control List)", definition: "List of permissions attached to a resource. Specifies which users/groups can access and what actions they can perform." },
            { term: "Conditional Access", definition: "Policies that evaluate conditions before granting access. Example: 'Require MFA if accessing from outside corporate network'." },
            { term: "PIM (Privileged Identity Management)", definition: "Just-in-time privileged access. Admin rights activated only when needed, with approval and time limits." },
            { term: "PAM (Privileged Access Management)", definition: "Managing and monitoring privileged accounts. Includes password vaulting, session recording, least privilege." },
            { term: "Zero Trust", definition: "Security model: 'Never trust, always verify.' Verify every request regardless of location. No implicit trust for anything inside the network." }
        ]
    },
    "network": {
        title: "🌐 Network Security",
        terms: [
            { term: "Firewall", definition: "Network security device that monitors and filters traffic based on rules. Can be network-based or host-based." },
            { term: "WAF (Web Application Firewall)", definition: "Firewall specifically for web applications. Protects against OWASP Top 10 attacks like SQL injection, XSS." },
            { term: "IDS (Intrusion Detection System)", definition: "Monitors network for suspicious activity and alerts. Passive - doesn't block, only detects." },
            { term: "IPS (Intrusion Prevention System)", definition: "Monitors AND blocks suspicious activity. Active defense. Placed inline with traffic." },
            { term: "DDoS (Distributed Denial of Service)", definition: "Attack using many sources to overwhelm a target with traffic, making it unavailable to legitimate users." },
            { term: "VPN (Virtual Private Network)", definition: "Encrypted tunnel for secure communication over public networks. Types: Site-to-site, Point-to-site, SSL VPN." },
            { term: "DMZ (Demilitarized Zone)", definition: "Network segment between internal and external networks. Hosts public-facing services while protecting internal network." },
            { term: "Network Segmentation", definition: "Dividing network into smaller segments with controls between them. Limits lateral movement if breached." },
            { term: "Micro-segmentation", definition: "Fine-grained segmentation, often at workload level. Each workload has its own security policies." },
            { term: "NSG (Network Security Group)", definition: "Azure resource for filtering network traffic. Contains inbound and outbound security rules." },
            { term: "MITM (Man-in-the-Middle)", definition: "Attack where attacker secretly intercepts and possibly alters communication between two parties." },
            { term: "Packet Sniffing", definition: "Capturing network packets for analysis. Legitimate (troubleshooting) or malicious (stealing data)." },
            { term: "DNS Poisoning", definition: "Corrupting DNS cache to redirect users to malicious sites. Also called DNS spoofing." },
            { term: "ARP Spoofing", definition: "Sending fake ARP messages to link attacker's MAC address with victim's IP. Enables MITM attacks on LAN." },
            { term: "Port Scanning", definition: "Probing a server for open ports to find attack vectors. Tools: Nmap, Masscan." },
            { term: "Private Link", definition: "Azure service for private connectivity to PaaS services. Traffic stays on Microsoft network, not internet." },
            { term: "Service Endpoint", definition: "Extends VNet identity to Azure services. Traffic still goes over internet but is optimized." },
            { term: "Bastion", definition: "Secure way to RDP/SSH to VMs without exposing them to internet. Jump server as a service." }
        ]
    },
    "web_security": {
        title: "🕸️ Web Application Security",
        terms: [
            { term: "OWASP", definition: "Open Web Application Security Project. Nonprofit producing free security resources. Famous for OWASP Top 10." },
            { term: "OWASP Top 10", definition: "List of most critical web application security risks. Updated periodically. Current: 2021 version." },
            { term: "SQL Injection (SQLi)", definition: "Attack inserting malicious SQL through user input. Can read/modify/delete database. Example: ' OR '1'='1" },
            { term: "XSS (Cross-Site Scripting)", definition: "Injecting malicious scripts into web pages viewed by others. Types: Reflected, Stored, DOM-based." },
            { term: "CSRF (Cross-Site Request Forgery)", definition: "Tricking user's browser into performing unwanted actions on a site where they're authenticated." },
            { term: "SSRF (Server-Side Request Forgery)", definition: "Making server perform requests to unintended locations. Can access internal services." },
            { term: "XXE (XML External Entity)", definition: "Attack exploiting XML parsers to read files, perform SSRF, or cause DoS." },
            { term: "IDOR (Insecure Direct Object Reference)", definition: "Accessing objects by manipulating references (IDs). Example: Changing /user/123 to /user/124 to access another user." },
            { term: "Broken Access Control", definition: "#1 OWASP 2021. Users acting outside intended permissions. Includes IDOR, privilege escalation." },
            { term: "Broken Authentication", definition: "Flaws allowing attackers to compromise passwords, keys, or session tokens." },
            { term: "Session Hijacking", definition: "Stealing or predicting session tokens to impersonate a user." },
            { term: "Session Fixation", definition: "Forcing user to use attacker-known session ID before authentication." },
            { term: "Clickjacking", definition: "Tricking users into clicking hidden elements by overlaying transparent frames." },
            { term: "Input Validation", definition: "Checking user input against expected format before processing. First line of defense against injection." },
            { term: "Output Encoding", definition: "Converting special characters to safe equivalents before displaying. Prevents XSS." },
            { term: "Parameterized Queries", definition: "SQL queries with placeholders for user input. Prevents SQL injection. Also called prepared statements." },
            { term: "CSP (Content Security Policy)", definition: "HTTP header controlling which resources browser can load. Mitigates XSS and data injection." },
            { term: "CORS (Cross-Origin Resource Sharing)", definition: "Mechanism allowing servers to specify who can access their resources from different origins." },
            { term: "SOP (Same-Origin Policy)", definition: "Browser security preventing scripts from one origin accessing data from another." },
            { term: "HSTS (HTTP Strict Transport Security)", definition: "Header forcing browsers to only use HTTPS. Prevents protocol downgrade attacks." },
            { term: "Burp Suite", definition: "Industry-standard web security testing tool. Intercepts, modifies, and replays HTTP requests." },
            { term: "OWASP ZAP", definition: "Free, open-source web application security scanner. Good for automated scanning." }
        ]
    },
    "threat_modeling": {
        title: "🎯 Threat Modeling (STRIDE)",
        terms: [
            { term: "Threat Modeling", definition: "Systematic process for identifying potential threats and vulnerabilities in a system. Done during design phase." },
            { term: "STRIDE", definition: "Microsoft's threat categorization model: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege." },
            { term: "Spoofing", definition: "Pretending to be someone or something else. Threat to AUTHENTICATION. Example: Fake login page, IP spoofing." },
            { term: "Tampering", definition: "Modifying data or code without authorization. Threat to INTEGRITY. Example: Changing database records, modifying files." },
            { term: "Repudiation", definition: "Denying having performed an action. Threat to NON-REPUDIATION. Example: 'I never made that transaction.' Countered by logging." },
            { term: "Information Disclosure", definition: "Exposing information to unauthorized parties. Threat to CONFIDENTIALITY. Example: Data breach, error messages revealing system info." },
            { term: "Denial of Service (DoS)", definition: "Making system unavailable. Threat to AVAILABILITY. Example: Flooding server with requests, crashing application." },
            { term: "Elevation of Privilege", definition: "Gaining higher access than authorized. Threat to AUTHORIZATION. Example: Regular user becoming admin." },
            { term: "DREAD", definition: "Risk rating model: Damage potential, Reproducibility, Exploitability, Affected users, Discoverability. Score 1-10 each." },
            { term: "PASTA", definition: "Process for Attack Simulation and Threat Analysis. 7-stage risk-centric methodology." },
            { term: "Attack Tree", definition: "Diagram showing paths to achieve an attack goal. Root is goal, leaves are attack methods." },
            { term: "Data Flow Diagram (DFD)", definition: "Visual representation of how data moves through a system. Used to identify trust boundaries and threats." },
            { term: "Trust Boundary", definition: "Line where data or execution changes trust level. Key point for threat analysis." },
            { term: "MITRE ATT&CK", definition: "Knowledge base of adversary tactics and techniques based on real observations. Used for threat intelligence." },
            { term: "Kill Chain", definition: "Stages of a cyberattack: Reconnaissance → Weaponization → Delivery → Exploitation → Installation → C2 → Actions on Objectives." }
        ]
    },
    "cloud_security": {
        title: "☁️ Cloud Security",
        terms: [
            { term: "Shared Responsibility Model", definition: "Cloud provider and customer share security duties. Provider secures OF the cloud; customer secures IN the cloud." },
            { term: "IaaS Security", definition: "Customer responsible for: OS, applications, data, identity. Provider: physical, network, hypervisor." },
            { term: "PaaS Security", definition: "Customer responsible for: applications, data. Provider handles more of the stack." },
            { term: "SaaS Security", definition: "Provider handles most security. Customer: data classification, user access, configuration." },
            { term: "CSPM (Cloud Security Posture Management)", definition: "Tools that identify misconfigurations and compliance risks in cloud environments. Example: Defender for Cloud." },
            { term: "CWPP (Cloud Workload Protection Platform)", definition: "Security for cloud workloads (VMs, containers, serverless). Runtime protection, vulnerability scanning." },
            { term: "CASB (Cloud Access Security Broker)", definition: "Security policy enforcement between users and cloud services. Visibility, compliance, data security, threat protection." },
            { term: "Landing Zone", definition: "Pre-configured, secure cloud environment following best practices. Foundation for cloud adoption." },
            { term: "Management Group", definition: "Container for organizing subscriptions. Apply policies and access at scale." },
            { term: "Azure Policy", definition: "Service for creating, assigning, and managing policies. Enforce standards and assess compliance." },
            { term: "Managed Identity", definition: "Azure-managed identity for services. No credentials in code. System-assigned or user-assigned." },
            { term: "Service Principal", definition: "Identity for applications/services in Entra ID. Used for automation and service-to-service auth." },
            { term: "Customer-Managed Keys (CMK)", definition: "Encryption keys controlled by customer instead of cloud provider. Stored in Key Vault or HSM." },
            { term: "Encryption at Rest", definition: "Data encrypted when stored. Protects against physical theft of storage media." },
            { term: "Encryption in Transit", definition: "Data encrypted during transmission. Uses TLS/SSL. Protects against interception." },
            { term: "Key Vault", definition: "Azure service for securely storing secrets, keys, and certificates. Hardware-backed (HSM) option available." }
        ]
    },
    "incident_response": {
        title: "🚨 Incident Response",
        terms: [
            { term: "Security Incident", definition: "Event that compromises confidentiality, integrity, or availability of information or systems." },
            { term: "Incident Response (IR)", definition: "Organized approach to addressing and managing security incidents. Goal: minimize damage and recovery time." },
            { term: "IR Lifecycle", definition: "Phases: 1) Preparation, 2) Detection & Analysis, 3) Containment, 4) Eradication, 5) Recovery, 6) Lessons Learned." },
            { term: "Triage", definition: "Process of prioritizing incidents based on severity and impact. Determines response urgency and resource allocation." },
            { term: "Containment", definition: "Limiting the scope and impact of an incident. Short-term (immediate) and long-term (while investigating)." },
            { term: "Eradication", definition: "Removing the threat from the environment. Includes removing malware, closing vulnerabilities." },
            { term: "Recovery", definition: "Restoring systems to normal operation. Includes system restoration, validation, monitoring." },
            { term: "Lessons Learned", definition: "Post-incident review to improve future response. What worked? What didn't? What to change?" },
            { term: "IOC (Indicator of Compromise)", definition: "Evidence that a security breach has occurred. Examples: malicious IPs, file hashes, unusual network traffic." },
            { term: "IOA (Indicator of Attack)", definition: "Evidence that an attack is in progress. More proactive than IOCs. Based on behavior." },
            { term: "SIEM (Security Information and Event Management)", definition: "System collecting, analyzing, and correlating security logs. Enables detection and investigation. Example: Microsoft Sentinel." },
            { term: "SOAR (Security Orchestration, Automation and Response)", definition: "Tools for automating security operations. Playbooks automate response to common incidents." },
            { term: "Playbook", definition: "Documented procedures for responding to specific incident types. Ensures consistent, efficient response." },
            { term: "Runbook", definition: "Step-by-step procedures for routine operations. Can be automated or manual." },
            { term: "Forensics", definition: "Scientific examination of digital evidence. Preserve, collect, analyze evidence for investigation." },
            { term: "Chain of Custody", definition: "Documented history of evidence handling. Critical for legal proceedings. Who had it, when, what was done." },
            { term: "Mean Time to Detect (MTTD)", definition: "Average time to discover a security incident. Lower is better." },
            { term: "Mean Time to Respond (MTTR)", definition: "Average time from detection to containment. Key metric for IR effectiveness." },
            { term: "Threat Hunting", definition: "Proactively searching for threats that evade existing detection. Hypothesis-driven investigation." }
        ]
    },
    "ai_security": {
        title: "🤖 AI & LLM Security",
        terms: [
            { term: "AI Security", definition: "Protecting AI systems from attacks and ensuring they behave safely. Includes data, model, and inference security." },
            { term: "OWASP LLM Top 10", definition: "Top 10 security risks for Large Language Model applications. Includes prompt injection, data leakage, etc." },
            { term: "Prompt Injection", definition: "Manipulating LLM behavior through crafted inputs. Direct (user input) or Indirect (from external data sources)." },
            { term: "Jailbreaking", definition: "Bypassing LLM safety guardrails to generate restricted content. Various techniques exist." },
            { term: "Data Poisoning", definition: "Corrupting training data to influence model behavior. Can introduce backdoors or degrade performance." },
            { term: "Model Extraction", definition: "Stealing a model by querying it repeatedly and training a copy. Intellectual property theft." },
            { term: "Adversarial Examples", definition: "Inputs designed to fool ML models. Small perturbations causing misclassification." },
            { term: "Model Inversion", definition: "Extracting training data information from a model. Privacy concern for sensitive data." },
            { term: "Membership Inference", definition: "Determining if specific data was used to train a model. Privacy attack." },
            { term: "Hallucination", definition: "LLM generating false or fabricated information confidently. Security risk if used for decisions." },
            { term: "Content Filtering", definition: "Blocking or flagging harmful content in AI inputs/outputs. Azure Content Safety." },
            { term: "Guardrails", definition: "Safety controls limiting AI behavior. Prevent harmful outputs, ensure compliance." },
            { term: "RAG (Retrieval Augmented Generation)", definition: "LLM pattern combining retrieval with generation. Security concerns: data access, injection via retrieved content." },
            { term: "AI Red Teaming", definition: "Testing AI systems for vulnerabilities and failures. Includes prompt attacks, bias testing." },
            { term: "Responsible AI", definition: "Developing AI ethically: fairness, transparency, privacy, safety, inclusiveness, accountability." },
            { term: "MITRE ATLAS", definition: "Knowledge base of adversarial tactics against AI systems. Like ATT&CK but for AI/ML." }
        ]
    },
    "compliance": {
        title: "📋 Compliance & Governance",
        terms: [
            { term: "Compliance", definition: "Adhering to laws, regulations, standards, and policies. Required for many industries." },
            { term: "GDPR", definition: "General Data Protection Regulation. EU law for data protection and privacy. Heavy fines for violations." },
            { term: "HIPAA", definition: "Health Insurance Portability and Accountability Act. US law protecting medical information." },
            { term: "PCI DSS", definition: "Payment Card Industry Data Security Standard. Requirements for handling credit card data." },
            { term: "SOC 2", definition: "Service Organization Control 2. Audit report on security, availability, processing integrity, confidentiality, privacy." },
            { term: "ISO 27001", definition: "International standard for Information Security Management Systems (ISMS). Certification available." },
            { term: "NIST CSF", definition: "National Institute of Standards and Technology Cybersecurity Framework. Identify, Protect, Detect, Respond, Recover." },
            { term: "CIS Controls", definition: "Center for Internet Security Controls. Prioritized set of actions for cyber defense." },
            { term: "Data Classification", definition: "Categorizing data by sensitivity. Common levels: Public, Internal, Confidential, Restricted." },
            { term: "Data Residency", definition: "Requirements for where data must be physically stored. Often country-specific." },
            { term: "Data Sovereignty", definition: "Data subject to laws of the country where it's collected/processed." },
            { term: "Right to be Forgotten", definition: "GDPR right to have personal data erased under certain conditions." },
            { term: "DLP (Data Loss Prevention)", definition: "Tools and policies preventing sensitive data from leaving the organization." },
            { term: "Audit Trail", definition: "Chronological record of system activities. Who did what, when. Essential for compliance." },
            { term: "GRC (Governance, Risk, Compliance)", definition: "Framework for managing governance, risk management, and compliance together." }
        ]
    },
    "devsecops": {
        title: "🔧 DevSecOps & AppSec",
        terms: [
            { term: "DevSecOps", definition: "Integrating security into DevOps. Security as code, shift left, automation." },
            { term: "Shift Left", definition: "Moving security earlier in development lifecycle. Find issues when cheaper to fix." },
            { term: "SAST (Static Application Security Testing)", definition: "Analyzing source code for vulnerabilities without executing. White-box testing." },
            { term: "DAST (Dynamic Application Security Testing)", definition: "Testing running application for vulnerabilities. Black-box testing." },
            { term: "IAST (Interactive Application Security Testing)", definition: "Combines SAST and DAST. Agent-based testing during runtime." },
            { term: "SCA (Software Composition Analysis)", definition: "Identifying vulnerabilities in third-party libraries and dependencies." },
            { term: "SBOM (Software Bill of Materials)", definition: "Inventory of components in software. Like ingredient list. Required for supply chain security." },
            { term: "Container Security", definition: "Securing containerized applications. Image scanning, runtime protection, secrets management." },
            { term: "Secrets Management", definition: "Securely storing and accessing credentials, API keys, certificates. Never hardcode secrets!" },
            { term: "Infrastructure as Code (IaC)", definition: "Managing infrastructure through code. Security: Scan templates for misconfigurations." },
            { term: "GitOps", definition: "Using Git as single source of truth for infrastructure. Security through version control and review." },
            { term: "Supply Chain Security", definition: "Securing the software development and delivery pipeline. Prevent tampering, verify integrity." },
            { term: "Code Signing", definition: "Digitally signing code to verify authenticity and integrity. Prevents tampering." },
            { term: "Vulnerability Scanning", definition: "Automated identification of security weaknesses in systems, networks, or applications." },
            { term: "Penetration Testing", definition: "Authorized simulated attack to find vulnerabilities. Goes beyond scanning - exploits vulnerabilities." },
            { term: "Bug Bounty", definition: "Program paying external researchers for finding and reporting vulnerabilities." }
        ]
    }
};

// ============================================
// CAREER ROADMAP DATA
// ============================================

const CAREER_ROADMAP = {
    timeline: [
        {
            year: "0-1",
            phase: "Foundation",
            icon: "📚",
            title: "Learning & First Role",
            description: "Build foundational knowledge and land your first security job",
            certifications: ["AZ-900", "SC-900", "AZ-500", "CompTIA Security+"],
            roles: ["SOC Analyst", "Junior Security Engineer", "Security Analyst"],
            salary: "$60,000 - $90,000",
            skills: ["SIEM basics", "Incident triage", "Vulnerability scanning", "Cloud fundamentals"],
            checklist: [
                "Complete this 16-week curriculum",
                "Get AZ-500 certified",
                "Build home lab",
                "Contribute to open source security projects",
                "Create GitHub portfolio",
                "Apply for entry-level roles"
            ]
        },
        {
            year: "1-2",
            phase: "Practitioner",
            icon: "🔧",
            title: "Hands-On Experience",
            description: "Gain real-world experience handling security operations",
            certifications: ["SC-200", "AWS Security Specialty", "CySA+"],
            roles: ["Security Engineer", "Cloud Security Engineer", "Pentester"],
            salary: "$90,000 - $130,000",
            skills: ["Incident response", "Threat hunting", "Security automation", "Multi-cloud"],
            checklist: [
                "Handle 50+ real security incidents",
                "Implement security controls in production",
                "Learn a second cloud platform (AWS/GCP)",
                "Automate security processes",
                "Mentor new team members",
                "Present at team meetings"
            ]
        },
        {
            year: "2-3",
            phase: "Specialist",
            icon: "🎯",
            title: "Deep Expertise",
            description: "Develop deep expertise in a security domain",
            certifications: ["CISSP", "CCSP", "OSCP", "GCIH"],
            roles: ["Senior Security Engineer", "Security Consultant", "AppSec Engineer"],
            salary: "$130,000 - $170,000",
            skills: ["Architecture design", "Risk assessment", "Compliance frameworks", "Team leadership"],
            checklist: [
                "Lead a security project end-to-end",
                "Get CISSP or equivalent certification",
                "Develop security standards/policies",
                "Conduct security architecture reviews",
                "Build relationships with business stakeholders",
                "Start public speaking (meetups, internal talks)"
            ]
        },
        {
            year: "3-5",
            phase: "Architect",
            icon: "🏗️",
            title: "Security Architect",
            description: "Design enterprise security architectures",
            certifications: ["SABSA", "TOGAF", "CCSK", "GIAC Certifications"],
            roles: ["Security Architect", "Principal Security Engineer", "Security Manager"],
            salary: "$170,000 - $220,000",
            skills: ["Enterprise architecture", "Zero Trust design", "Executive communication", "Strategy"],
            checklist: [
                "Design security architecture for 3+ major projects",
                "Present to C-level executives",
                "Develop security roadmaps",
                "Lead security transformation initiatives",
                "Publish security blogs/articles",
                "Speak at industry conferences"
            ]
        },
        {
            year: "5+",
            phase: "Leader",
            icon: "👑",
            title: "Senior Architect / Director",
            description: "Strategic leadership and industry influence",
            certifications: ["CISM", "Board-level certifications", "Industry recognition"],
            roles: ["Principal Architect", "Security Director", "CISO", "VP Security"],
            salary: "$220,000 - $350,000+",
            skills: ["Business strategy", "Board communication", "Industry influence", "Vision setting"],
            checklist: [
                "Define security strategy for organization",
                "Report to board of directors",
                "Build and lead security teams",
                "Influence industry standards",
                "Recognized thought leader",
                "Advisory board positions"
            ]
        }
    ],
    additionalResources: [
        { title: "CISSP Study Guide", link: "https://www.isc2.org/Certifications/CISSP", type: "cert" },
        { title: "SABSA Framework", link: "https://sabsa.org/", type: "framework" },
        { title: "Security Architecture Patterns", link: "https://www.microsoft.com/en-us/security/business/security-101", type: "learn" },
        { title: "CISO MindMap", link: "https://rafeeqrehman.com/ciso-mindmap/", type: "career" }
    ],
    keyMetrics: {
        avgTimeToArchitect: "4-6 years",
        avgCertifications: "5-8",
        avgSalaryGrowth: "3-4x from entry to senior",
        inDemandSkills: ["Cloud Security", "Zero Trust", "AI Security", "DevSecOps"]
    }
};

const QUICK_REF_DATA = [
    {
        title: "Essential CLI Commands",
        content: `<code>az login</code>
<code>az account set -s "subscription"</code>
<code>az group create -n rg -l eastus</code>
<code>az keyvault create -n kv -g rg</code>
<code>az network nsg create -n nsg -g rg</code>
<code>az network vnet create -n vnet -g rg</code>`
    },
    {
        title: "OWASP Top 10 (2021)",
        content: `<code>A01 Broken Access Control</code>
<code>A02 Cryptographic Failures</code>
<code>A03 Injection</code>
<code>A04 Insecure Design</code>
<code>A05 Security Misconfiguration</code>
<code>A06 Vulnerable Components</code>`
    },
    {
        title: "Burp Suite Shortcuts",
        content: `<code>Ctrl+R - Send to Repeater</code>
<code>Ctrl+I - Send to Intruder</code>
<code>Ctrl+U - URL encode</code>
<code>Ctrl+Shift+U - URL decode</code>
<code>Ctrl+B - Base64 encode</code>`
    },
    {
        title: "SQLi Payloads",
        content: `<code>' OR '1'='1</code>
<code>' UNION SELECT null--</code>
<code>'; DROP TABLE users--</code>
<code>' AND 1=1--</code>
<code>admin'--</code>`
    },
    {
        title: "XSS Payloads",
        content: `<code>&lt;script&gt;alert(1)&lt;/script&gt;</code>
<code>&lt;img src=x onerror=alert(1)&gt;</code>
<code>&lt;svg onload=alert(1)&gt;</code>
<code>javascript:alert(1)</code>`
    },
    {
        title: "Zero Trust Principles",
        content: `<code>1. Verify explicitly</code>
<code>2. Use least privilege</code>
<code>3. Assume breach</code>`
    },
    {
        title: "OWASP LLM Top 3",
        content: `<code>1. Prompt Injection</code>
<code>2. Insecure Output</code>
<code>3. Training Data Poisoning</code>`
    },
    {
        title: "IR Phases",
        content: `<code>1. Preparation</code>
<code>2. Detection & Analysis</code>
<code>3. Containment</code>
<code>4. Eradication</code>
<code>5. Recovery</code>
<code>6. Lessons Learned</code>`
    }
];
