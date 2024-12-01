
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
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flogotyp.us%2Flogo%2Fadidas%2F&psig=AOvVaw0rgbi9bqVrRdomsHLnigxX&ust=1733141276273000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjplcPEhooDFQAAAAAdAAAAABA"
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
          video: "https://youtu.be/6LD30ChPsSs?feature=shared"
        },
        {
          id: "v2",
          title: "Event Highlights",
          description: "Corporate event video montage",
          video: "https://youtu.be/6LD30ChPsSs?feature=shared"
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
          video: "https://youtu.be/6LD30ChPsSs?feature=shared"
        }
      ]
    }
    
  ];

  return (
    <div className="min-h-screen bg-custom-indigo py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-white bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">My Creative Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-indigo-800/30 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-indigo-600/20">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">{project.title}</h3>
                <p className="text-indigo-200 mb-6 font-medium">{project.category}</p>
                <div className="space-y-6">
                  {project.items.map((item) => (
                    <div key={item.id} className="border-t border-indigo-700/50 pt-6">
                      <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                      <p className="text-indigo-200 text-sm mb-4">{item.description}</p>
                      {item.image && (
                        <img 
                          src={item.image || "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"} 
                          alt={item.title}
                          className="w-full h-56 object-cover rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                        />
                      )}
                      {item.video && (
                        <div className="video-player">
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Adidas_Logo.svg" 
                            alt="Adidas Logo"
                            className="w-full h-56 object-cover rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                          />
                          <iframe 
                            src={`https://www.youtube.com/embed/${item.video.split('/').pop()}`} 
                            title={item.title}
                            className="w-full h-56 object-cover rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work