import React from 'react';

const BrandForgeMerchDisplay = () => {
  const merchItems = [
    { id: '01', title: 'Merch 01' },
    { id: '02', title: 'Merch 02' },
    { id: '03', title: 'Merch 03' },
    { id: '04', title: 'Merch 04' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="w-full bg-amber-100 p-4 md:p-8 lg:p-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
            <span className="block">brand forge:</span>
            <span className="block">the identity hub</span>
          </h1>
          <span className="text-orange-500 font-bold md:ml-4">EXCLUSIVE GEAR TO WEAR YOUR AMBITION!</span>
        </div>
        
        <p className="mt-4 max-w-3xl">
          <strong>Craft your legacy with exclusive INIZIO merch!</strong> From statement tees to sleek accessories, Brand Forge is where 
          style meets innovation. Wear your ambition, represent the spirit of entrepreneurship, and take home a piece of the summit!
        </p>
      </div>

      {/* Merch Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {merchItems.map((item) => (
          <div key={item.id} className="overflow-hidden" style={{ width: '424px', height: '724px' }}>
            {/* Card with custom styling for layered effect */}
            <div className="relative h-full">
              {/* Custom styling for the layered cards */}
              <style jsx>{`
                .card-base {
                  background-color: rgb(249 115 22); /* orange-500 */
                  border-radius: 1.5rem; /* rounded-3xl */
                  height: 100%;
                  width: 100%;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                }
                
                .amber-layer {
                  background-color: rgb(254 243 199); /* amber-100 */
                  border-radius: 1.5rem;
                  width: 100%;
                  aspect-ratio: 1 / 1;
                  margin-bottom: 20px;
                  position: relative;
                  overflow: hidden;
                }
                
                .black-image {
                  background-color: black;
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: calc(100% - 20px);
                  border-radius: 1.5rem;
                }
              `}</style>
              
              <div className="card-base">
                {/* Top section with layered effect */}
                <div className="amber-layer">
                  {/* Black image card on top */}
                  <div className="black-image"></div>
                </div>
                
                {/* Content section */}
                <div className="text-black p-6 flex flex-col flex-grow">
                  <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                  
                  <div className="mb-4">
                    <p className="font-medium mb-1">Size Available:</p>
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button 
                          key={size} 
                          className="bg-white px-3 py-1 rounded font-medium hover:bg-gray-100 transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-auto">
                    <button className="bg-white px-4 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
                      I WANT IT NOW!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandForgeMerchDisplay;