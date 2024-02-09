import GridPage from "@/components/GridPage"

export const config = {
  disable: false
}
const gridInfo = { xs: 1, sm: 1, md: 1, lg: 1 }


const TITLE = "News :)"
const DESCRIPTION = "What is going on around Meetesh."


const content = [
  {
    title: "Received Nilesh Vashee Award for Best Performance in PhD Admission",
    text: 'The award had already been given upon admission, but was prize was conditional to good performance in the coursework. The ceremony took place on 7th February. (Left) Me, (Right) Prof varsha Apte, IITB Head of CSE Department.',
    imageUri: "/nilesh-vashee-award.jpg",
    created: "7th February 2023"
  },
  {
    title: "Completed 6 months @ IITB [2023-24/Autumn]",
    text: "Scored CGPA of 10. Courses registered were CS683 (Advanced Architecture), CS614 (Advanced Compilers) and CS744 (Design and Engineering of Computing Systems)",
    created: "27th December 2023"
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
    title: "Presented @ SERI 2023",
    text: `“Debugging Contextually Specialized JIT Runtimes: Challenges and Strategies”. Software Engineering Research in India (SERI), Goa University, India, June 2nd-3rd, 2023.`,
    created: "3rd June 2023",
    links: [
      ["https://sites.google.com/view/seri-2023-goa", "SERI 2023"]
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
