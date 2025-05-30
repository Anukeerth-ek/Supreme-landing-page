import React from 'react'

const MarketingPage = () => {
  return (
<>
      {/* <Head> */}
        <title>Supreme Circle - 360-degree Nonwoven Solutions</title>
        <meta name="description" content="Evolving the drive with 360-degree nonwoven solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      {/* </Head> */}

      <main 
        className="min-h-screen bg-black flex flex-col justify-center items-center px-6 relative cursor-pointer"
        // onClick={handleClick}
      >
        {/* Main Content Container */}
        <div className="text-center text-white max-w-5xl mx-auto flex-1 flex flex-col justify-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
            Evolving the drive with{' '}
            <span className="font-medium">360-degree</span>
            <br />
            nonwoven solutions
          </h1>
        </div>

        {/* Call to Action - Fixed at bottom */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-400 text-sm mb-1">
            Click anywhere for next slide
          </p>
          <p className="text-gray-500 text-xs">
            (Only written for prototype)
          </p>
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </main>
    </>
  )
}

export default MarketingPage