
import logo from "../component/logo.png"

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  items: WorkItem[];
}

const Work = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Logo Design Works",
      category: "Design",
      items: [
        {
          id: "ld1",
          title: "Brand Identity Design",
          description: "Modern logo and branding package",
          image: logo
        }
      ]
    },
    {
      id: 2,
      title: "Video Editing Projects",
      category: "Video",
      items: [
        {
          id: "v1",
          title: "Commercial Video",
          description: "30-second promotional video",
          video: "6LD30ChPsSs"
        },
        {
          id: "v2",
          title: "Event Highlights",
          description: "Corporate event video montage",
          video: "6LD30ChPsSs"
        }
      ]
    },
    {
      id: 3,
      title: "Short Film Editing Works",
      category: "Video",
      items: [
        {
          id: "sf1",
          title: "Short Film",
          description: "Award-winning short film",
          video: "6LD30ChPsSs"
        }
      ]
    }
  ];

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center py-8 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          My Creative Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-black-900/50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:bg-black-900/70"
            >
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-indigo-300">{project.title}</h3>
                <p className="text-indigo-400 text-sm mb-4">{project.category}</p>
                {project.items.map((item) => (
                  <div key={item.id} className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-indigo-200 text-xs mb-3">{item.description}</p>
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-40 object-contain bg-white rounded-md mb-3"
                      />
                    )}
                    {item.video && (
                      <div className="relative w-full pt-[56.25%]">
                        <iframe 
                          src={`https://www.youtube.com/embed/${item.video}`} 
                          title={item.title}
                          className="absolute top-0 left-0 w-full h-full rounded-md"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work;
