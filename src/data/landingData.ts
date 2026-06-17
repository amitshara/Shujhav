import { PresetCase, Testimonial, PricingPlan, FAQItem, CitizenRight } from '../types';

export const presetCases: PresetCase[] = [
  {
    id: 'tenancy-deposit',
    category: 'Tenancy & Rent',
    title: 'Landlord Refusal of Security Deposit',
    description: 'Landlord is refusing to refund the ₹50,000 security deposit after moving out of a flat in Bangalore, citing non-existent damages.',
    problemText: 'I recently vacated my rent agreement in Bangalore. My landlord is refusing to return my security deposit of ₹50,000 despite me clearing all dues and painting the house. He is claiming unjustified charges for normal wear-and-tear.',
    relevantLaw: 'Section 105 & 108 of the Transfer of Property Act, 1882, and State Rent Control Acts (e.g., Karnataka Rent Control Act).',
    legalRights: [
      'Right to refund of security deposit within 30 days of handing over possession, subject to valid deductions (which must be documented).',
      'Exclusion of normal wear-and-tear from security deposit deductions under Indian tenancy precedents.',
      'Right to quiet enjoyment and legal action in case of unjust enrichment by the landlord.'
    ],
    actionSteps: [
      {
        title: 'Send a Formal Written Notice',
        description: 'Issue a detailed demand notice to the landlord via Registered Post with Acknowledgement Due (RPAD) and email, giving a 15-day deadline to refund the deposit.',
        authority: 'Legal Notice'
      },
      {
        title: 'Register grievance on National Consumer Helpline',
        description: 'If the flat was rented through a commercial service or PG company (like Nestaway, Zolostays), file a grievance on NCH or the Consumer Forum.',
        authority: 'National Consumer Helpline (NCH)'
      },
      {
        title: 'File a Civil Suit / Rent Tribunal Complaint',
        description: 'File a petition before the Rent Control Court/Rent Court or civil court representing monetary recovery of deposit under the civil law codes.',
        authority: 'Local Rent Court / Rent Controller'
      }
    ],
    noticeTemplate: {
      subject: 'LEGAL DUES DEMAND: Refund of security deposit for rented premises',
      body: `Dear [Landlord's Name],

I am writing to formally demand the immediate refund of my security deposit of Rs. [Amount], which was deposited with you under the Rent Agreement dated [Agreement Date] for the property located at [Full Property Address].

Please note that I vacated the premises on [Vacation Date] after fulfilling all terms of the agreement, including paying all electricity and water dues and painting the apartment. As per the tenancy laws and general principles of contract:
1. Normal wear-and-tear is strictly excluded from security deposit deductions.
2. The flat was returned in the same structural condition as received.

Despite multiple follow-ups, you have failed to return the security deposit. Your refusal to refund the amount constitutes unjust enrichment and criminal breach of trust under the Bharatiya Nyaya Sanhita (BNS).

Please treat this as a formal legal demand to refund the entire sum of Rs. [Amount] to my bank account within 15 days of receiving this notice. Failing this, I will be forced to initiate civil recovery proceedings and file a complaint with the Rent Controller at your cost, risk, and consequences.

Yours sincerely,
[Your Name]
Phone: [Your Phone]
Bank Details: [Your IFSC & Account No]`
    }
  },
  {
    id: 'freelancer-unpaid',
    category: 'Freelancer & Business',
    title: 'Client Refusing Freelance Invoice Payment',
    description: 'An IT company in Mumbai is refusing to pay a ₹1,20,000 website development invoice to an independent contractor after approval.',
    problemText: 'I worked as a freelance web developer for a digital agency based in Mumbai. They approved my final website delivery in March. However, they have been ignoring my emails and Slack reminders for my invoice of ₹1,20,000 for over 90 days.',
    relevantLaw: 'Section 73 of the Indian Contract Act, 1872 & MSME Dev Act 2006 (if registered under Udyam).',
    legalRights: [
      'Right to receive timely payments within 45 days if you are registered as an MSME under the Udyam portal.',
      'Right to sue for Breach of Contract and claim outstanding dues with interest under Section 73 (loss of profit).',
      'Right to file a civil summary suit under Order XXXVII of the Civil Procedure Code for quick recovery.'
    ],
    actionSteps: [
      {
        title: 'Upload to MSME Samadhaan Portal',
        description: 'If you are registered under Udyam (free, takes 10 minutes to register), upload the unpaid invoice and contract to MSME Samadhaan for government-brokered conciliation.',
        authority: 'MSME Samadhaan (Ministry of MSME)'
      },
      {
        title: 'Send a Cease and Desist / Demand Notice',
        description: 'Send a formal 15-day notice pointing out a suit under Section 73 of the Contract Act and MSME guidelines, mentioning compound interest.',
        authority: 'Legal Notice / MSME Mandate'
      },
      {
        title: 'File a Summary Suit under CPC Order 37',
        description: 'Initiate a summary suit in the Commercial Court. This is a fast-track money suit where the defendant has to seek permission to defend, speeding up recovery.',
        authority: 'Local Commercial Court'
      }
    ],
    noticeTemplate: {
      subject: 'FORMAL NOTICE: Non-payment of outstanding website development dues against Approved Invoice [No.]',
      body: `To,
[Client Company Representative/Director Name],
[Company Name & Address]

This is a formal legal demand representation for the pay-out of overdue payments amounting to Rs. 1,20,000/- (Rupees One Lakh Twenty Thousand Only) against invoice number [Invoice No.] dated [Invoice Date] for full website development services.

Be pleased to note that:
1. The deliverables stated in our Service Agreement dated [Contract Date] were successfully completed, approved, and launched live by your team on [Launch Date].
2. Under Section 15 of the MSME Development Act (Udyam Number: [Udyam No if any]), invoice payments must be settled within 45 days of delivery approval.
3. Despite multiple attempts at communication, you have arbitrarily delayed this payment, inducing heavy interest liabilities and economic distress to my consultancy.

Therefore, you are hereby requested to clear the due balance of Rs. 1,20,000/- along with interest at 12% p.a. within 15 days of this letter. If the dues are not cleared, I will register an official dispute with the MSME Council and commercial recovery division.

Sincerely,
[Your Name]
Proprietor / Freelance Consultant`
    }
  },
  {
    id: 'consumer-defective',
    category: 'Consumer dispute',
    title: 'E-Commerce Refuses Refund on Damaged Mobile',
    description: 'An online e-commerce giant delivered a smartphone with a broken screen, but refuses returns claiming damage happened post-delivery.',
    problemText: 'I ordered a ₹29k smartphone from a popular online retailer. When I unboxed it, the screen was cracked. I immediately requested a replacement, but they closed my request saying their shipping team has records showing the parcel was intact. I have an unboxing video!',
    relevantLaw: 'Section 2(11) of the Consumer Protection Act, 2019 (Deficient Service/Product Defect) & E-Commerce Rules, 2020.',
    legalRights: [
      'Right to receive safe, defect-free products as per product descriptions.',
      'Right to return damaged or defective goods under the Consumer Protection (E-Commerce) Rules, 2020.',
      'Right to compensation for mental harassment and loss because of unfair trade practices.'
    ],
    actionSteps: [
      {
        title: 'Lodge National Consumer Helpline (NCH) Complaint',
        description: 'File an online complaint with NCH (toll-free 1915 or website/app). They have high success rates resolving online merchant disputes.',
        authority: 'National Consumer Helpline (Govt. of India)'
      },
      {
        title: 'Submit Grievance on INGRAM Portal',
        description: 'Provide your NCH complaint ID and upload your unboxing video as clear proof of delivery status.',
        authority: 'Integrated Grievance Redressal Mechanism'
      },
      {
        title: 'File Case online via e-Daakhil',
        description: 'If NCH fails, file a formal consumer petition in your District Consumer Forum online via e-Daakhil without hiring a lawyer.',
        authority: 'District Consumer Disputes Redressal Commission'
      }
    ],
    noticeTemplate: {
      subject: 'FORMAL COMPLAINT: Delivery of ruptured, broken smartphone under Order ID [ID] / Failure of resolution',
      body: `Dear E-Commerce Grievance Officer,

I am writing regarding my purchase of [Smartphone Model] under Order ID: [Order ID] on [Date], totaling Rs. [Amount].

The package was opened in a single recorded digital unboxing video (which is attached herewith) and revealed the product screen was completely shattered inside the manufacturer pack. Despite this clear evidence of transit/factory damage:
- Your helpline representative summarily rejected my return request under Ticket ID [Ticket ID], alleging self-damage.
- This constitutes a severe case of 'Deficient Service' and 'Unfair Trade Practice' as defined under Section 2(11) and 2(47) of the Consumer Protection Act, 2019.

Please note that as a consumer, I am fully entitled to receive the goods intact, or receive an immediate full refund or brand-new replacement.

I call upon you to register this grievance, reverse the transaction of Rs. [Amount] to my credit instrument, and resolve this complaint within 7 business days of this notification. Otherwise, I will escalate to the National Consumer Commission (NCDRC) and file an e-Daakhil lawsuit, claiming punitive damages.

Warm regards,
[Your Name]
Address: [Your Address]`
    }
  },
  {
    id: 'rera-delay',
    category: 'Real Estate / Property',
    title: 'Builder Delayed Apartment Possession',
    description: 'A homebuyer is facing a 2-year delay in possession of their flat in Noida from an unregistered/registered builder.',
    problemText: 'I booked a 3BHK flat in Sector 150, Noida in 2021. The Builder-Buyer Agreement promised possession by June 2024. However, construction has stalled, and the developer of the high-rise is demanding extra money to complete the project.',
    relevantLaw: 'Section 18 of the Real Estate (Regulation and Development) Act (RERA), 2016.',
    legalRights: [
      'Right to withdraw from the project and receive a full flat booking refund along with compound interest from the promised date of delivery.',
      'Right to receive monthly interest payments for construction delays if the homebuyer wishes to continue with the project.',
      'Right to inspect sanction plans, layout approvals, and construction updates on the official state RERA portal.'
    ],
    actionSteps: [
      {
        title: 'Verify Builder RERA Registration',
        description: 'Look up the project on the state RERA registry (e.g., UP-RERA) to check building permits and construction milestones.',
        authority: 'State RERA Web Directory'
      },
      {
        title: 'File an Online Complaint (Form M/N)',
        description: 'Submit an online complaint before the state RERA Authority to demand the return of funds with interest, or monthly delay penalty fees.',
        authority: 'RERA Authority (e.g., UP-RERA / MahaRERA)'
      },
      {
        title: 'Approach RERA Adjudicating Officer',
        description: 'File for compensation for loss, mental agony, and developer misconduct under Section 12/18 of the Real Estate Act.',
        authority: 'RERA Adjudicating Court'
      }
    ],
    noticeTemplate: {
      subject: 'NOTICE FOR COMPENSATION/REFUND UNDER SECTION 18 OF RERA ACT, 2016 FOR PROJECT [NAME]',
      body: `To,
The Board of Directors,
[Developer Company Name],
[Corporate Office Address]

Subject: Request for Refund/Periodic Interest on account of delay in handing over flat possession of Unit [Flat No.], [Tower Name], in the Project "[Project Name]".

Sirs,

I had purchased and entered into a Builder-Buyer Agreement dated [Date] for the allocation of flat unit [No.] in your project.

As per Section [No.] of our written covenant, you bound yourselves to deliver physical vacant possession with Occupancy Certificate (OC) by June 2024. A total of Rs. [Paid Amount], accounting for 90% of the flat price, has been successfully remitted to your ESCROW bank details in accordance with milestones.

Despite my promptness, construction is at a complete standstill, and you are currently in breach of contract for a period exceeding 24 months. State laws under RERA section 18 mandates that:
"If the promoter fails to complete or is unable to give possession of an apartment, he shall be liable on demand to the allottees, to return the amount received with interest."

Consequently, I hereby notify you to:
1. Provide a clear completion roadmap and credit monthly interest on my investment at the prescribed RERA interest rate (SBI MCLR + 2%) immediately.
2. Refund my capital with interest if handover cannot occur within the next 45 days.

Should you fail to comply, formal litigation before the RERA Adjudication bench is imminent.

Yours truly,
[Your Name]`
    }
  },
  {
    id: 'cyber-fraud',
    category: 'Cyber Safety',
    title: 'Bank UPI Hack / KYC Fraud',
    description: 'A middle-aged retail customer was scammed into clicking a malicious link and had ₹35,000 withdrawn from their bank account.',
    problemText: 'I received an SMS claiming my banking app was blocked and I must update my KYC. I tapped the link, logged in, and within an hour, two UPI transactions deducted ₹35,000 from my savings account. My bank helpline took 4 hours to block the account.',
    relevantLaw: 'Section 66C & 66D of Information Technology Act 2000, Section 318/319 BNS (Cheating), RBI Mandate on Zero Liability of Bank Customers (Circ: DBR.No.Leg.BC.78/09.07.005/2017-18).',
    legalRights: [
      'Right to Zero Liability under RBI guidelines if unauthorised transaction is reported to banks within 3 critical working days.',
      'Right to bank investigation, account protection, and immediate freezing of the fraudster bank credentials.',
      'Right to file a complaint at the cybercrime cell and receive an FIR/NCR copy to register financial insurance claims.'
    ],
    actionSteps: [
      {
        title: 'Report Incident to Bank in "Golden Hour"',
        description: 'Notify your bank immediately (within 2 hours) to halt the transfers and lock your cards and online login assets.',
        authority: 'Bank Branch & Dedicated Toll Free helpline'
      },
      {
        title: 'File Complaint at National Cyber Crime Portal',
        description: 'Submit an online complaint immediately at cybercrime.gov.in or dial the 24/7 National Cyber Security Hotline 1930.',
        authority: 'Govt. Cyber Crime Portal / Dial 1930'
      },
      {
        title: 'File a police general report (NCR) / FIR',
        description: 'Secure a digital cyber acknowledgement slip and file an NCR at your local police station to demand bank liability offsets under RBI regulations.',
        authority: 'Local Police Cyber Cell'
      }
    ],
    noticeTemplate: {
      subject: 'URGENT NOTIFICATION: Fraudulent Unauthorised UPI Transaction Report / Request for Liability Protection under RBI Guidelines',
      body: `To,
The Branch Manager,
[Your Bank Name],
[Your Savings Branch Address]

Ref: Savings Bank Account [Account No.] / Unauthorized UPI debits of Rs. 35,000.

Dear Sir/Madam,

I am writing regarding fraudulent unauthorized digital transfers originating from my abovementioned bank account on [Date] at [Time] without my conscious approval:
1. Debit 1: Rs. 20,000 to UPI ID [Fraudulent VPA/UPI ID]
2. Debit 2: Rs. 15,000 to UPI ID [Fraudulent VPA/UPI ID]

As soon as I noticed the SMS alerts, I reported the incident immediately on 1930 and blocked further operations by calling the banking support center at [Time when blocked].

I have registered an official cyber crime grievance at the National Cybercrime Portal (Acknowledgment Slip attached with ID: [Grievance No]).

Under the RBI circular "Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions" (Ref: RBI/2017-18/15), since I have reported this unauthorized incident within 24 hours of commission, my liability is limited to zero.

I request you to:
- Immediately register this report.
- Coordinate with the beneficiary banks to retrieve and freeze the funds in their respective destination wallets.
- Re-credit the stolen sum of Rs. 35,000/- as a shadow reversal credit pending banking investigation.

Sincerely,
[Your Name]
Phone: [Your Phone]
Enclosed: Cyber Portal Complaint PDF & Bank Statement`
    }
  }
];

export const clientRights: CitizenRight[] = [
  {
    id: 'right-1',
    category: 'Consumer',
    title: 'Right to Seek Redressal',
    act: 'Consumer Protection Act, 2019',
    summary: 'The right to seek legal remedies against unfair trade practices, exploitation, or defective products.',
    fullRightText: 'Every Indian consumer possesses the right to seek fair settlement of genuine claims, including replacement, repair, or full refund. Complaints can be filed at District, State, or National Commissions without appointing an advocate.'
  },
  {
    id: 'right-2',
    category: 'Tenant',
    title: 'Notice Period Immunity',
    act: 'Model Tenancy Act / Rent Control Law',
    summary: 'A tenant cannot be summarily evicted without a valid reason and a formal legal written notice.',
    fullRightText: 'Except in cases of non-payment of rent, a landlord must serve a formal eviction notice under specified grounds and provide a reasonable notice period (usually 30 days or as per contract) before initiating eviction proceedings.'
  },
  {
    id: 'right-3',
    category: 'Employee',
    title: 'Maternity Benefit Shield',
    act: 'Maternity Benefit Act, 1961',
    summary: 'Ensures 26 weeks of paid maternity leave and protects against termination during pregnancy.',
    fullRightText: 'It is unlawful for any employer to dismiss, discharge, or vary conditions of employment of a female employee on account of pregnancy or maternity leave. Violations attract rigorous legal penalties.'
  },
  {
    id: 'right-4',
    category: 'Cyber',
    title: 'Cyber Financial Refund Right',
    act: 'RBI Zero Liability Directives',
    summary: 'Protects banking customers from losses due to unauthorized online transactions if reported early.',
    fullRightText: 'If you report an unauthorized electronic banking transaction to your bank within 3 days of its occurrence, your liability is limited to zero. The burden of proof of customer consent rests on the bank.'
  },
  {
    id: 'right-5',
    category: 'General',
    title: 'Right to Free Legal Aid',
    act: 'Constitution of India, Article 39A',
    summary: 'Mandates the government to provide free legal representation to weaker sections.',
    fullRightText: 'Article 39A mandates the State to secure that the operation of the legal system promotes justice on a basis of equal opportunity, providing free legal services through National/State Legal Services Authorities (NALSA/SLSA).'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Citizens Free',
    price: {
      monthly: 0,
      annual: 0
    },
    period: 'Forever',
    desc: 'Empowering every common citizen to understand their rights and generate simple notices.',
    features: [
      '3 AI Legal Consultations / mo',
      'Plain English/Hindi summaries',
      'Basic Notice Templates Creator',
      'Access to Citizen Rights Library',
      'Email customer support'
    ],
    cta: 'Get Started Free',
    popular: false
  },
  {
    name: 'Pro Shield',
    price: {
      monthly: 499,
      annual: 399
    },
    period: 'per month',
    desc: 'For freelancers, independent creators, active tenants, and active consumers.',
    features: [
      'Unlimited AI Consultations',
      'Advanced Legal Notice Generator',
      'Verified Legal Experts Directory',
      'Consumer Forum Assistance toolkit',
      'Interactive Case Tracker and Organizer',
      'Priority Whatsapp chat assistant',
      'Multi-Language translation'
    ],
    cta: 'Upgrade to Pro',
    popular: true
  },
  {
    name: 'Business Shield',
    price: {
      monthly: 1999,
      annual: 1599
    },
    period: 'per month',
    desc: 'Complete MSME and small business legal safety suite with custom drafted documentation.',
    features: [
      'Everything in Pro Shield',
      'Commercial Contract translation',
      'MSME Samadhaan Filing kit',
      'GST & Tax query resolver',
      'Dedicated lawyer consultation calls (1/mo)',
      'Custom watermark & corporate branding',
      'Team accounts (up to 5 members)'
    ],
    cta: 'Secure My Business',
    popular: false
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is Shujhav a replacement for a practicing professional lawyer or advocate?',
    answer: 'No, Shujhav is not a law firm and does not provide formal legal advice. It is an educational legal-tech artificial-intelligence tool designed to demystify complex law terminology, translate bare acts to simple plain languages, generate standard document templates, and help you strategize outer-court resolutions. For binding litigation, we connect you with accredited, bar-council certified legal specialists.'
  },
  {
    id: 'faq-2',
    question: 'Are the documents generated by Shujhav legally valid in Indian courts?',
    answer: 'Yes! The document drafts (like demand notices, cease & desists, rental summaries) generated on our platform are formatted in accordance with standard Indian legal codes (Civil Procedure Code, Indian Evidence Act). A notice becomes a fully enforceable legally valid document when you print it, sign it, and send it via speed post or registered mail. Pro users can also opt for digital e-signs.'
  },
  {
    id: 'faq-3',
    question: 'Does Shujhav support regional Indian languages like Hindi?',
    answer: 'Yes! Shujhav is built specifically for India. We support plain-language translations and legal draft generations in Hindi, Kannada, Tamil, Telugu, Marathi, Bengali, and English, allowing citizens from all states to access affordable guidance.'
  },
  {
    id: 'faq-4',
    question: 'Is my data and legal scenario confidential and private?',
    answer: 'Absolutely. Privacy is our core foundation. All your case details, personal contexts, and generated legal notices are encrypted in transit and at rest. We do not sell your personal files to advert companies, and we comply fully with the Digital Personal Data Protection (DPDP) Act, 2023 of India.'
  },
  {
    id: 'faq-5',
    question: 'What is the "Golden Hour" for digital banking or UPI frauds?',
    answer: 'The first 2 to 24 hours of electronic fraud is called the Golden Hour. Under Reserve Bank of India (RBI) regulations, if you report unauthorized electronic fund transactions to your bank or the cyber crime helpline (1930) within this timeline, the bank is strictly liable to clawback/secure the funds, and your personal consumer liability drops to zero rupees.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rajinder Negi',
    role: 'Freelance UI/UX Designer',
    location: 'New Delhi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    content: 'An agency backed out on a web design invoice of ₹85,000 for five months, ignoring my messages. Shujhav guided me through the MSME Samadhaan process, generated a compound-interest demand notice, and the agency settled the dues within 12 days. Absolute lifesaver for freelancers!',
    caseType: 'Freelancer Invoice dispute'
  },
  {
    id: 't-2',
    name: 'Kavitha Swaminathan',
    role: 'IT Professional',
    location: 'Bangalore, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    content: 'My landlord in Koramangala refused to return ₹60,000 rent deposit, inventing cleaning and painting damages. I used Shujhav to print a 15-day notice detailing the Karnataka Rent Laws. Upon receiving it via email and post, he immediately wired ₹55,000. It is incredibly simple!',
    caseType: 'Tenant Security Deposit Recovery'
  },
  {
    id: 't-3',
    name: 'Amit Patel',
    role: 'Retail Pharmacy Store Owner',
    location: 'Ahmedabad, Gujarat',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    content: 'An e-commerce mobile site delivered a cracked tablet and rejected my returns twice. I lodged a grievance on NCH using the pre-filled legal notice template from Shujhav. Within a week, the e-commerce company dispatched a brand new substitute. Very powerful tech.',
    caseType: 'E-commerce Warranty Fraud'
  }
];
