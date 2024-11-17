function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row bg-opacity-10">
      {/* Left Section */}
      <section className=" w-full md:w-1/2 py-20 px-12 md:pl-8  flex flex-col justify-center gap-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-[#044e83]">Governor Sindh</h1>
        <h3 className="text-3xl md:text-4xl text-center text-[#044e83]">Kamran Khan Tessori</h3>
        <h1 className="text-4xl md:text-5xl text-center text-[#2eb6e8]">Certified Cloud Applied Generative AI Engineer (GenEng)</h1>
        <h4 className="text-2xl md:text-3xl text-center font-bold text-[#044e83]">Earn up to $5,000 / month</h4>
        <h4 className="text-2xl md:text-3xl text-center font-bold text-[#044e83]">Now admissions are open in Hyderabad</h4>
        <div className="flex flex-col justify-center md:flex-row gap-5">
          <button className="bg-[#044e83] text-white font-bold text-2xl w-full md:w-56 rounded-lg p-3 md:p-4">Apply Now</button>
          <div className="text-[#044e83] w-full md:w-56 ">
            <h3 className="text-2xl text-center font-bold">562,143</h3>
            <p className="text-xl text-center">Accepted Applications</p>
          </div>
        </div>
      </section>
      {/* Right Section */}
      <section className="flex justify-items-end w-full md:w-1/2 h-44 pt-3">
        <img src="/assets/img6.png" alt="" className="w-[900px] h-[700px] " />
      </section>
    </div>
  )
}

export default HeroSection