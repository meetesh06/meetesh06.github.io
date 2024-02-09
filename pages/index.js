import GridPage from "@/components/GridPage"

const gridInfo = { xs: 1, sm: 1, md: 2, lg: 3 }
export const config = {
  disable: false
}

const TITLE = "Meetesh Mehta 🏴‍☠️ 🏴‍☠️ 🏴‍☠️"
const DESCRIPTION = "Hello! My name is Meetesh Mehta, and I am a PhD scholar at IIT Bombay specializing in the field of compilers. Specifically, I am interested in JIT Compilers, and my recent research has focused on reduction on warmup and deoptimization times. Compilers are a critical component of modern computing systems, and my work seeks to increase the level of specialization performed at runtime while keeping overheads to a minimum. I'm excited to share my findings with you and discuss this fascinating field further."

const content = [

  

  {
    title: "PhD @ IIT Bombay, second semester",
    text: 'I am currently doing a literature survey. Looking into topics such as dependent types, dynamic deoptimization and debugging.',
    created: "Updated: 9th Feb 2024"
  },

  
  
  {
    title: "[MS Thesis] Reusing Contextually Specialized JIT Precompiled Units",
    links: [
      ["/MS-thesis.pdf","(Read here) Link to PDF"]
    ], 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: undefined,
    textList: undefined,
    created: "8th June 2023"
  },

  {
    title: "Highlights",
    links: [
      ["https://www.cse.iitb.ac.in/~manas/","Dr. Manas Thakur"]
    ], 
    index: undefined,
    imageUri: "./compl.webp",
    href: undefined,
    id: undefined,
    text: "Working with Dr. Manas Thakur and the CompL group has been the most rewarding and fulfilling part of my life :) I am proud of.",
    textList: undefined,
    created: undefined
  },
  
  
  
  
  {
    title: "[OOPSLA 2023] Reusing Just-in-Time Compiled Code",
    links: [
      ["https://doi.org/10.1145/3622839","(Read here) 10.1145/3622839"]
    ],
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: `Most code is executed more than once. If not entire programs then libraries remain unchanged from one run to the next. Just-in-time compilers expend considerable effort gathering insights about code they compiled many times, and often end up generating the same binary over and over again. We explore how to reuse compiled code across runs of different programs to reduce warm-up costs of dynamic languages. We propose to use speculative contextual dispatch to select versions of functions from an off-line curated code repository. That repository is a persistent database of previously compiled functions indexed by the context under which they were compiled. The repository is curated to remove redundant code and to optimize dispatch. We assess practicality by extending Ř, a compiler for the R language, and evaluating its performance. Our results suggest that the approach improves warmup times while preserving peak performance.`,
    textList: undefined,
    created: "16th October 2023"
  },

  

  

  {
    title: "[VMIL 2023] Debugging Dynamic Language Features in a Multi-tier Virtual Machine",
    links: [
      ["https://doi.org/10.1145/3623507.3623549","(Read here) 10.1145/3623507.3623549"]
    ],
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: undefined,
    textList: undefined,
    created: "19th October 2023"
  },
  {
    title: "Research Interests",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Compilers, JITs, Programming Languages, Security",
    textList: undefined,
    created: undefined
  },

  

  // {
  //   title: "Something About Me",
  //   links: undefined, 
  //   index: undefined,
  //   imageUri: undefined,
  //   href: undefined,
  //   id: undefined,
  //   text: "Computers fascinate me, and I am constantly drawn to exploring the intricacies of their inner workings. From high-level abstractions like DSLs and React to low-level aspects such as code generation, assembly, and C++, I find myself equally comfortable navigating different levels of abstraction. I am passionate about staying up-to-date with the latest technological advancements and enjoy delving deeper into the field of computer science.",
  //   textList: undefined,
  //   created: undefined
  // },
  // {
  //   title: "Skills",
  //   links: undefined, 
  //   index: undefined,
  //   imageUri: undefined,
  //   href: undefined,
  //   id: undefined,
  //   text: undefined,
  //   textList: [
  //     ["C, C++, Java, LLVM", "Experience in large real world projects"],
  //     ["React/Native, JS, R", "A lot of fun projects like this site. Worked on a JIT compiler for R called Rsh."],
  //     ["Scripting", "Routinely use scripting languages like python, bash, JS, etc."],
  //     ["Databases", "Am comfortable in mongo, SQL, etc."],
  //     ["Teaching Assistant", "CS502 Compiler Design, C302 Paradigms of Programming"],
  //   ],
  //   created: undefined
  // },
  {
    title: "Quote",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Logic processed infinitely is emotion.",
    textList: undefined,
    created: undefined
  },
  // {
  //   title: "Interests",
  //   links: undefined, 
  //   index: undefined,
  //   imageUri: undefined,
  //   href: undefined,
  //   id: undefined,
  //   text: "I am an avid explorer and love to embark on long walks and hikes, often accompanied by my favorite tunes or a good book or article. In my free time, I enjoy taking on new personal projects, such as designing and building light controllers using Arduino, setting up solar panels on my terrace, and more. I am always on the lookout for interesting ideas and challenges, and enjoy learning new skills and techniques to bring them to fruition.",
  //   textList: undefined,
  //   created: undefined
  // },
  // {
  //   title: "Education",
  //   links: undefined, 
  //   index: undefined,
  //   imageUri: undefined,
  //   href: undefined,
  //   id: undefined,
  //   text: undefined,
  //   textList: [
  //     ["2023+: PhD CSE", "IIT Bombay Department of Computer Science and Engineering"],
  //     ["2020-2023: M.S (by Research) CSE", "IIT Mandi School of Computing and Electrical Engineering"],
  //     // ["2020: GATE CSE", "Cleared GATE examination."],
  //     ["2016-2020: B.Tech CSE", "MRIIRS, NCR-Faridabad"],
  //     ["2014-2016: High School", "Sri Gayatri Junior College, Hyderabad"],
  //     ["2004-2014: Primary School", "Bharatiya Vidya Bhavans Public School, Hyderabad"],
  //   ],
  //   created: undefined
  // },

  
  
]


export default () => <GridPage title={TITLE} description={DESCRIPTION} gridInfo={gridInfo} content={content} />
