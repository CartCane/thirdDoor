import Cards from "./features/home/Cards"
import styles from './modules/CareerDepartments.module.css'

const data=[
    {
        title: "Engineering and technology", 	
        content: "Build with smart teammates and solve tough problems.",
        image: "engineering.jpg"
    },
    {	title: "AI and Machine Learning",
        content: "Push the boundaries of next-gen AI and ML to help create a future of work powered by curiosity and rooted in integrity.",
        image: "AI.jpg"
    },
    {	title: "Cybersecurity",
        content: "Millions trust us with their data. Your skills protect over one trillion transctions and the people behind them.",
        image: "cybersecurity.jpg"
    },
    {	title: "Consulting and CX",
        content: "Work side by side with customers, bringing fresh ideas that change how they work - and how you grow.",
        image: "consulting.jpg"
    }, 
    {	title: "Sales",
        content: "Close career-defining deals with a team that's got your back, selling products customers already love.",
        image: "sales.jpg"
    },
    {	title: "Project Management",
        content: "Set clear goals, bring teams together, and deliver work that changes how people get things done.",
        image: "project management.jpg"
    },
    {
        title: "Presales",
        content: "Partner with leading companies. Share insights and authenticity while showing what our solutions can do.",
        image: "pre-sales.jpg"
    },
    {
        title: "Marketing",
        content: "Turn data into stories that inspire action. Use creativity to shape our brand and grow your career.",
        image: "marketing.jpg"
    },
    {
        title: "Project Management",
        content: "Set clear goals, bring teams together, and deliver work that changes how people get things done.",
        image: "project management.jpg"
    },
    {
        title: "Corporate Functions",
        content: "You’re not in the background—you’re center stage, keeping us strong, fueling growth, and powering the company every day.",
        image: "corporate functions.jpg"
    }
]

export default function CareerDepartments(){
    return(
        <div className={styles.container}>
            {data.map((pro) => 
                <div className="container">
                    <Cards head={pro.title} description={pro.content} image={`/thirdDoor/careers/${pro.image}`} fsize=".7rem"/>
                </div>)
            }
        </div>
    )
}