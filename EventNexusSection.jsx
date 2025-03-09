// components/EventNexusSection.jsx
import React from 'react';

const EventNexusSection = () => {
  const events = [
    {
      id: '01',
      title: 'Event 01',
      description: 'Where ideas collide and opportunities emerge! Experience startup showcases, power-packed panels, and game-changing networking at the heart of innovation.',
    },
    {
      id: '02',
      title: 'Event 02',
      description: 'Where ideas collide and opportunities emerge! Experience startup showcases, power-packed panels, and game-changing networking at the heart of innovation.',
    },
    {
      id: '03',
      title: 'Event 03',
      description: 'Where ideas collide and opportunities emerge! Experience startup showcases, power-packed panels, and game-changing networking at the heart of innovation.',
    }
  ];

  return (
    <div className="w-full bg-amber-100 p-4 md:p-8 lg:p-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-right">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-2">
          event-nexus:
          <br />
          where action unfolds
        </h1>
        <div className="text-orange-500 font-bold text-xl mb-6">
          EVENT STATION - YOUR GATEWAY TO GROUNDBREAKING EXPERIENCES!
        </div>
        
        <p className="max-w-4xl ml-auto">
          Step into Event-Nexus, the heartbeat of INIZIO, where groundbreaking ideas take center stage. This is where startups
          pitch their visions, industry leaders share transformative insights, and innovators spark discussions that shape the
          future. Whether you're an aspiring entrepreneur, a tech enthusiast, or a business strategist, this space is designed to
          fuel your curiosity and expand your knowledge. From high-energy panel discussions and keynote speeches to
          interactive workshops and fireside chats, every moment here is an opportunity to learn, connect, and grow.
        </p>
      </div>

      {/* Event Cards */}
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {events.map((event, index) => {
          const isEven = index % 2 === 0;
          
          // Card sizes
          const blackCardWidth = 424;
          const backgroundCardWidth = blackCardWidth + 20;
          const orangeCardWidth = 1043;
          const cardHeight = 399;
          
          return (
            <div 
              key={event.id}
              className="mx-auto"
              style={{
                width: "100%",
                maxWidth: `${orangeCardWidth}px`,
                height: `${cardHeight}px`,
                position: "relative",
                marginBottom: "2rem"
              }}
            >
              {/* Orange Card (Base Card) */}
              <div 
                className={`bg-orange-500 p-8 flex flex-col ${isEven ? 'items-start text-left' : 'items-end text-right'}`}
                style={{ 
                  width: `${orangeCardWidth}px`, 
                  height: `${cardHeight}px`,
                  position: "absolute",
                  left: isEven ? "0" : "auto",
                  right: !isEven ? "0" : "auto",
                  borderRadius: "22px",
                  zIndex: "1"
                }}
              >
                <h2 
                  className="text-4xl font-black mb-4"
                  style={{ 
                    fontSize: event.id === '01' || event.id === '02' ? '81px' : '2.25rem',
                    lineHeight: event.id === '01' || event.id === '02' ? '1' : '2.5rem',
                  }}
                >
                  Event {event.id}
                </h2>
                <p className="text-black max-w-lg">
                  {event.description}
                </p>
              </div>
              
              {/* Background-colored Card (20px wider than black card) */}
              <div 
                style={{ 
                  width: `${backgroundCardWidth}px`,
                  height: `${cardHeight}px`,
                  backgroundColor: "#fef3c7", // amber-100
                  position: "absolute",
                  right: isEven ? "0" : "auto",
                  left: !isEven ? "0" : "auto",
                  borderRadius: "22px",
                  zIndex: "2"
                }}
              ></div>
                
              {/* Black Card */}
              <div 
                style={{ 
                  width: `${blackCardWidth}px`,
                  height: `${cardHeight}px`,
                  backgroundColor: "#000",
                  position: "absolute",
                  right: isEven ? "0" : "auto",
                  left: !isEven ? "0" : "auto",
                  borderRadius: "22px",
                  zIndex: "3"
                }}
              >
                {/* Event text */}
                <div 
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    [isEven ? "right" : "left"]: "1rem",
                    color: "#f97316",
                    fontWeight: "bold",
                    letterSpacing: "0.2em"
                  }}
                >
                  E V E N T {event.id}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventNexusSection;