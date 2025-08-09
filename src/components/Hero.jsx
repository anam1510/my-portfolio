const Hero=()=>{
    return(
        <section id="home" className="bg-gray-50 min-h-[100vh] w-auto p-4 flex items-center justify-center ">
            <div className="text-center max-w-2xl px-4">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Hi, I'm <span className="text-blue-600">Anam Ansari</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">I am a frontend developer</p>
                <a href ="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">View my work</a>
            </div>
        </section>
    )
}
export default Hero;