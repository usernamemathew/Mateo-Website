

export default function Home() {
  return (
    <>
      
        <div className="bg-[url('/Images/home-hero-bg.png')] bg-cover w-screen h-[50rem] relative">
          <div className="textbook relative z-10 px-6 lg:px-12 lg:py-12 py-6">
            <h1 className="text-center font-black text-4xl mb-2">Hot Beans Web</h1>
            <h2 className="text-center font-semibold text-2xl tracking-widest">Start Developing with us now</h2>
          </div>             
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#191919] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        </div>
        <div className="px-6 lg:px-12 py-6 lg:py-12 ">
          <h1 className="text-4xl font-black mb-4">About us</h1>
          <p>
            In 2014, Hot Beans Web emerged under the entrepreneurial spirit of brothers Mark and Stewart. Hailing from the cozy confines of their West Bridgford family home, the duo, armed with Computer Science degrees from Leicester University (2013), initially embarked on crafting websites for the businesses of close-knit family and friends. Their innate passion and adeptness as web developers swiftly propelled their venture into expansion.
          </p>

          <h2>What we're looking for?</h2>
          
          <p>
            We are looking for recruit new developers to grow our business and help people get started in the industry. Please go to our
          </p>
        </div>
    </>
  )
}