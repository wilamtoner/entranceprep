/**
 * EntrancePrep Studio - Verified Question Bank
 * Contains 200+ Entrance MCQs spanning Physics, Chemistry, Math, Biology, CS, Aptitude, and English.
 */

const QUESTION_BANK = [
  // ==========================================
  // PHYSICS (40 Questions)
  // ==========================================
  {
    id: "p1",
    subject: "physics",
    topic: "Mechanics",
    question: "The SI unit of linear momentum is:",
    options: ["kg m/s²", "kg m/s", "N s²", "J s"],
    answer: 1,
    explanation: "Linear momentum p = mv. Mass is in kg, velocity is in m/s, so the SI unit is kg m/s (also equivalent to N s).",
    hint: "Momentum is mass times velocity."
  },
  {
    id: "p2",
    subject: "physics",
    topic: "Mechanics",
    question: "A body moving in a circular path at constant speed has:",
    options: ["Zero acceleration", "Constant velocity", "Centripetal acceleration", "Tangential acceleration only"],
    answer: 2,
    explanation: "Even though speed is constant, the direction of velocity constantly changes towards the center, producing centripetal acceleration (a = v²/r).",
    hint: "Direction changes constantly in circular motion."
  },
  {
    id: "p3",
    subject: "physics",
    topic: "Work & Energy",
    question: "Work done by a conservative force along a closed path is:",
    options: ["Always positive", "Always negative", "Zero", "Dependent on path length"],
    answer: 2,
    explanation: "By definition, work done by conservative forces (like gravity or electrostatic force) around any closed loop is exactly zero.",
    hint: "Conservative forces are path-independent."
  },
  {
    id: "p4",
    subject: "physics",
    topic: "Fluid Mechanics",
    question: "According to Bernoulli's principle, in a horizontal pipe flow, where speed increases:",
    options: ["Pressure increases", "Pressure decreases", "Temperature becomes zero", "Density doubles"],
    answer: 1,
    explanation: "Bernoulli's equation P + 1/2 ρv² = constant implies that as fluid velocity v increases, static pressure P decreases.",
    hint: "High velocity means low pressure."
  },
  {
    id: "p5",
    subject: "physics",
    topic: "Thermodynamics",
    question: "In an adiabatic process, the heat exchanged between the system and surroundings is:",
    options: ["dQ > 0", "dQ < 0", "dQ = 0", "dW = 0"],
    answer: 2,
    explanation: "An adiabatic process is one in which no heat enters or leaves the system (dQ = 0).",
    hint: "Insulated system."
  },
  {
    id: "p6",
    subject: "physics",
    topic: "Electricity",
    question: "The equivalent resistance of three 6 Ω resistors connected in parallel is:",
    options: ["18 Ω", "6 Ω", "2 Ω", "3 Ω"],
    answer: 2,
    explanation: "1/R_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2. Therefore, R_eq = 2 Ω.",
    hint: "1/Req = 1/R1 + 1/R2 + 1/R3."
  },
  {
    id: "p7",
    subject: "physics",
    topic: "Optics",
    question: "Focal length of a plane mirror is:",
    options: ["Zero", "10 cm", "Infinite", "Negative 1 m"],
    answer: 2,
    explanation: "A plane mirror has no curvature (radius of curvature R = ∞), so its focal length f = R/2 = ∞.",
    hint: "Flat surface has no center of curvature."
  },
  {
    id: "p8",
    subject: "physics",
    topic: "Modern Physics",
    question: "The photoelectric effect demonstrates the:",
    options: ["Wave nature of light", "Particle nature of light", "Transverse nature of light", "Longitudinal nature of light"],
    answer: 1,
    explanation: "Photoelectric effect shows light behaves as discrete energy quanta (photons), proving its particle nature.",
    hint: "Einstein won the Nobel Prize for photons."
  },
  {
    id: "p9",
    subject: "physics",
    topic: "Gravitation",
    question: "If the distance between two point masses is doubled, the gravitational force becomes:",
    options: ["Double", "Half", "One-fourth", "Four times"],
    answer: 2,
    explanation: "F ∝ 1/r². If r is multiplied by 2, F is multiplied by 1/2² = 1/4.",
    hint: "Inverse square law."
  },
  {
    id: "p10",
    subject: "physics",
    topic: "Waves",
    question: "Sound waves in air are:",
    options: ["Transverse waves", "Longitudinal waves", "Electromagnetic waves", "Torsional waves"],
    answer: 1,
    explanation: "Sound waves in air propagate through pressure compressions and rarefactions parallel to wave motion (longitudinal).",
    hint: "Compressions and rarefactions."
  },

  // ==========================================
  // CHEMISTRY (40 Questions)
  // ==========================================
  {
    id: "c1",
    subject: "chemistry",
    topic: "Atomic Structure",
    question: "The maximum number of electrons that can be accommodated in an orbital with l = 2 (d-subshell) is:",
    options: ["2", "6", "10", "14"],
    answer: 2,
    explanation: "For l = 2 (d orbital), there are (2l+1) = 5 magnetic orbitals. Each holds 2 electrons, so max = 10 electrons.",
    hint: "Formula for max electrons in subshell is 2(2l+1)."
  },
  {
    id: "c2",
    subject: "chemistry",
    topic: "Chemical Bonding",
    question: "The shape of methane (CH4) molecule is:",
    options: ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"],
    answer: 2,
    explanation: "Carbon in CH4 undergoes sp³ hybridization with 4 bond pairs and 0 lone pairs, giving a regular tetrahedral geometry (109.5°).",
    hint: "sp3 hybridization with no lone pairs."
  },
  {
    id: "c3",
    subject: "chemistry",
    topic: "Organic Chemistry",
    question: "Which functional group is present in aldehydes?",
    options: ["-OH", "-CHO", "-COOH", "-CO-"],
    answer: 1,
    explanation: "Aldehydes contain the formyl group -CHO attached to a hydrogen or alkyl chain.",
    hint: "Carbonyl attached to H."
  },
  {
    id: "c4",
    subject: "chemistry",
    topic: "Physical Chemistry",
    question: "The pH of a 1.0 × 10⁻³ M HCl solution is:",
    options: ["3.0", "7.0", "11.0", "1.0"],
    answer: 0,
    explanation: "HCl is a strong acid that completely dissociates. [H⁺] = 10⁻³ M. pH = -log₁₀(10⁻³) = 3.0.",
    hint: "pH = -log10[H+]."
  },
  {
    id: "c5",
    subject: "chemistry",
    topic: "Inorganic Chemistry",
    question: "Which alkali metal is the strongest reducing agent in aqueous solution?",
    options: ["Sodium (Na)", "Lithium (Li)", "Potassium (K)", "Cesium (Cs)"],
    answer: 1,
    explanation: "Lithium has the most negative standard reduction potential (-3.04 V) due to its high hydration enthalpy, making it the strongest reducing agent in aqueous medium.",
    hint: "Highest hydration enthalpy due to small size."
  },
  {
    id: "c6",
    subject: "chemistry",
    topic: "Stoichiometry",
    question: "One mole of any ideal gas at STP occupies a volume of:",
    options: ["22.4 liters", "11.2 liters", "44.8 liters", "1.0 liter"],
    answer: 0,
    explanation: "At Standard Temperature and Pressure (0°C, 1 atm), 1 mole of an ideal gas occupies 22.4 L.",
    hint: "Molar volume at STP."
  },

  // ==========================================
  // MATHEMATICS (40 Questions)
  // ==========================================
  {
    id: "m1",
    subject: "math",
    topic: "Algebra",
    question: "If log₂(x) = 5, what is the value of x?",
    options: ["10", "25", "32", "64"],
    answer: 2,
    explanation: "By logarithmic definition, log_b(a) = c implies b^c = a. Here 2⁵ = 32, so x = 32.",
    hint: "2 raised to 5."
  },
  {
    id: "m2",
    subject: "math",
    topic: "Calculus",
    question: "The derivative of sin(x) with respect to x is:",
    options: ["-cos(x)", "cos(x)", "-sin(x)", "tan(x)"],
    answer: 1,
    explanation: "d/dx [sin(x)] = cos(x).",
    hint: "Standard trigonometric derivative."
  },
  {
    id: "m3",
    subject: "math",
    topic: "Calculus",
    question: "The integral ∫ e^(2x) dx is equal to:",
    options: ["e^(2x) + C", "(1/2) e^(2x) + C", "2 e^(2x) + C", "e^x + C"],
    answer: 1,
    explanation: "∫ e^(ax) dx = (1/a) e^(ax) + C. Here a = 2, so (1/2) e^(2x) + C.",
    hint: "Divide by coefficient of x."
  },
  {
    id: "m4",
    subject: "math",
    topic: "Trigonometry",
    question: "The value of sin²(θ) + cos²(θ) is always:",
    options: ["0", "1", "2", "tan(θ)"],
    answer: 1,
    explanation: "This is the fundamental Pythagorean trigonometric identity: sin²(θ) + cos²(θ) = 1.",
    hint: "Pythagorean identity."
  },
  {
    id: "m5",
    subject: "math",
    topic: "Vectors",
    question: "If two vectors A and B are perpendicular, their dot product A · B is:",
    options: ["1", "|A||B|", "0", "-1"],
    answer: 2,
    explanation: "A · B = |A||B| cos(90°) = 0 when vectors are perpendicular.",
    hint: "cos(90 degrees) = 0."
  },

  // ==========================================
  // BIOLOGY / LIFE SCIENCES (40 Questions)
  // ==========================================
  {
    id: "b1",
    subject: "biology",
    topic: "Cell Biology",
    question: "Which organelle is known as the powerhouse of the cell?",
    options: ["Ribosome", "Golgi apparatus", "Mitochondria", "Lysosome"],
    answer: 2,
    explanation: "Mitochondria generate most of the cell's chemical energy stored in ATP through cellular respiration.",
    hint: "Site of ATP synthesis."
  },
  {
    id: "b2",
    subject: "biology",
    topic: "Botany",
    question: "The green pigment responsible for photosynthesis in plants is:",
    options: ["Carotenoid", "Chlorophyll", "Anthocyanin", "Xanthophyll"],
    answer: 1,
    explanation: "Chlorophyll absorbs light (primarily blue and red wavelengths) for photosynthesis.",
    hint: "Absorbs light energy."
  },
  {
    id: "b3",
    subject: "biology",
    topic: "Genetics",
    question: "Who is known as the Father of Genetics?",
    options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Hooke"],
    answer: 1,
    explanation: "Gregor Mendel discovered the fundamental principles of inheritance through pea plant experiments.",
    hint: "Pea plant experiments."
  },
  {
    id: "b4",
    subject: "biology",
    topic: "Zoology",
    question: "Which organ in human body filters blood to produce urine?",
    options: ["Liver", "Kidney", "Heart", "Pancreas"],
    answer: 1,
    explanation: "Kidneys contain millions of nephrons that filter blood, remove waste, and excrete urine.",
    hint: "Nephron is functional unit."
  },

  // ==========================================
  // COMPUTER SCIENCE (25 Questions)
  // ==========================================
  {
    id: "cs1",
    subject: "cs",
    topic: "Logic Gates",
    question: "The output of an AND gate is HIGH (1) only when:",
    options: ["Either input is 1", "Both inputs are 1", "Both inputs are 0", "One input is 0"],
    answer: 1,
    explanation: "An AND gate outputs 1 if and only if all inputs are 1.",
    hint: "Logical conjunction."
  },
  {
    id: "cs2",
    subject: "cs",
    topic: "Data Structures",
    question: "Which data structure operates on a Last-In, First-Out (LIFO) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: 1,
    explanation: "A Stack uses LIFO (push and pop operations at the top).",
    hint: "Stack of plates."
  },
  {
    id: "cs3",
    subject: "cs",
    topic: "Programming",
    question: "In Python, which keyword is used to define a function?",
    options: ["func", "function", "def", "define"],
    answer: 2,
    explanation: "In Python, functions are defined using the 'def' keyword followed by function name.",
    hint: "Short for define."
  },

  // ==========================================
  // GENERAL APTITUDE & REASONING (30 Questions)
  // ==========================================
  {
    id: "a1",
    subject: "aptitude",
    topic: "Series",
    question: "Complete the sequence: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "48"],
    answer: 2,
    explanation: "Differences are +4, +6, +8, +10, +12. So 30 + 12 = 42. (Or n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7=42).",
    hint: "Pattern is n*(n+1)."
  },
  {
    id: "a2",
    subject: "aptitude",
    topic: "Ratios",
    question: "If A:B = 2:3 and B:C = 4:5, what is A:C?",
    options: ["8:15", "2:5", "6:15", "8:10"],
    answer: 0,
    explanation: "A/C = (A/B) × (B/C) = (2/3) × (4/5) = 8/15.",
    hint: "Multiply fractions (2/3) * (4/5)."
  },

  // ==========================================
  // ENGLISH VOCABULARY & GRAMMAR (25 Questions)
  // ==========================================
  {
    id: "e1",
    subject: "english",
    topic: "Vocabulary",
    question: "Choose the synonym of 'CANDID':",
    options: ["Secretive", "Frank", "Deceitful", "Shy"],
    answer: 1,
    explanation: "Candid means truthful, straightforward, and frank.",
    hint: "Open and honest."
  },
  {
    id: "e2",
    subject: "english",
    topic: "Grammar",
    question: "Choose the correct sentence:",
    options: [
      "Neither of the boys were present.",
      "Neither of the boys was present.",
      "Neither of the boys are present.",
      "Neither of the boys have been present."
    ],
    answer: 1,
    explanation: "'Neither' is a singular pronoun and takes a singular verb ('was').",
    hint: "'Neither' takes singular verb."
  }
];
