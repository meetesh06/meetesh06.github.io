import GridPage from "@/components/GridPage"

export const config = {
  disable: false
}
const gridInfo = { xs: 1, sm: 1, md: 1, lg: 1 }


const TITLE = "News :)"
const DESCRIPTION = "What is going on around Meetesh."


const content = [
  {
    title: "Completed first year @ IITB, cleared qualifiers for PhD",
    text: "Honestly I was comfortable with the subjects and enjoyed digging deeper into topics. I enjoyed the seminar work where I digged deeper into type systems (both theory and practice). Also I read The Great Gatsby, Kafka on the shore, Norwegian Wood, What I talk about when I talk about running, The palace of illusions and Crime and Punishment. We also did a compilers specific event at IITB, see the link for details.",
    imageUri: "/trad-day.jpg",
    created: "31st May 2023",
    links: [
      ["https://www.cse.iitb.ac.in/~uday/CPLD/", "PLACID @ IITB (PL and Compilers in Industry Day)"],
      ["/23d0361_phd_seminar.pdf", "PhD Seminar Report (Type Systems For Dynamic Languages)"],
      ["/phd-seminar-slides.pdf", "PhD Seminar Slider (Type Systems For Dynamic Languages)"]
    ]
  },
  {
    title: "Received Nilesh Vashee Award for Best Performance in PhD Admission",
    text: 'The award had already been given upon admission, but was prize was conditional to good performance in the coursework. The ceremony took place on 7th February. (Left) Me, (Right) Dr. Varsha Apte, IITB Head of CSE Department.',
    imageUri: "/nilesh-vashee-award.jpg",
    created: "7th February 2023",
    links: [
      ["https://www.cse.iitb.ac.in/~varsha/", "Dr. Varsha Apte"]
    ]
  },
  {
    title: "Completed 6 months @ IITB [2023-24/Autumn]",
    text: "Scored CGPA of 10. Courses registered were CS683 (Advanced Architecture), CS614 (Advanced Compilers) and CS744 (Design and Engineering of Computing Systems)",
    created: "27th December 2023"
  },
  {
    title: "Presented a talk @ RHPL (Workshop on Research Highlights in Programming Languages) 2023",
    text: `Talk titled "Reusing Just-in-Time Compiled Code" based on recently published work @ OOPSLA 20023. RHPL (co-located with FSTTCS 2023) was organized at IIIT Hyderabad, India, Dec 18th—20th, 2023. Left (Me), Right (my advisor, Dr. Manas Thakur).`,
    imageUri: '/RHPL-23-pic.jpg',
    created: "19th December 2023",
    links: [
      ["https://fmindia.cmi.ac.in/rhpl/index.html", "RHPL 2023"],
      ["/RHPL-23.pdf", "Slides (PDF)"],
      ["https://doi.org/10.1145/3622839","(Read here) 10.1145/3622839"],
      ["https://www.cse.iitb.ac.in/~manas/","Dr. Manas Thakur"]
    ]
  },
  {
    title: "Presented @ VMIL 2023 remotely",
    created: "23rd October 2023",
    text: "This talk was given remotely as we couldn't make it for SPLASH 2023, Cascais, Portugal.",
    links: [
      ["https://youtu.be/pd_Px8LaHvw?t=20041", "Watch the recording"],
      ["/VMIL-23-talk.pdf", "Slides (PDF)"],
      ["https://doi.org/10.1145/3623507.3623549","(Read here) 10.1145/3623507.3623549"]
    ]
  },
  {
    title: "Published paper @ VMIL 2023",
    created: "19th October 2023",
    text: "Debugging Dynamic Language Features in a Multi-tier Virtual Machine",
    links: [
      ["https://doi.org/10.1145/3623507.3623549","(Read here) 10.1145/3623507.3623549"]
    ],
  },
  {
    title: "Published paper @ OOPSLA 2023",
    created: "16th October 2023",
    text: "Reusing Just-in-Time Compiled Code",
    links: [
      ["https://doi.org/10.1145/3622839","(Read here) 10.1145/3622839"]
    ],
  },
  {
    title: "Joined IIT Bombay",
    created: "27th July 2023"
  },
  {
    title: "Submitted thesis @ IIT Mandi",
    created: "8th June 2023",
    links: [
      ["./MS-thesis.pdf","(Read here) Link to PDF"]
    ], 
  },
  {
    title: "Presented a talk @ SERI 2023",
    text: `Talk titled “Debugging Contextually Specialized JIT Runtimes: Challenges and Strategies” based on recently published work @ VMIL 2023 (co-located OOPSLA 2023). Software Engineering Research in India (SERI) was organized at Goa University, India, June 2nd-3rd, 2023.`,
    created: "3rd June 2023",
    links: [
      ["https://sites.google.com/view/seri-2023-goa", "SERI 2023"],
      ["/seri-23-talk.pdf", "Slides (PDF)"],
      ["https://doi.org/10.1145/3623507.3623549","(Read here) 10.1145/3623507.3623549"]
    ]
  },
  {
    title: "Attended ISEC 2023 @ IIIT Allahabad",
    created: "23rd Feb 2023"
  },
  {
    title: "Presented MS Synopsis Seminar",
    created: "3rd Feb 2023"
  },
  {
    title: "Presented MS Open Seminar",
    created: "29th Nov 2022"
  },
]


export default () => <GridPage title={TITLE} description={DESCRIPTION} gridInfo={gridInfo} content={content} />
