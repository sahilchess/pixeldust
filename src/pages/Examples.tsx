import React, { useState } from 'react';

const projects = [
  {
    name: 'Snowflake',
    description: 'A snowflake design with WS2812B LEDs and a XIAO ESP32C3.',
    image: 'https://private-user-images.githubusercontent.com/91326009/401258560-ad405bdd-c9ca-421a-99f4-8ff4ff19b22f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDA0MjM0OTgsIm5iZiI6MTc0MDQyMzE5OCwicGF0aCI6Ii85MTMyNjAwOS80MDEyNTg1NjAtYWQ0MDViZGQtYzljYS00MjFhLTk5ZjQtOGZmNGZmMTliMjJmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjI0VDE4NTMxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE5YjM3M2FjMjFiNmJhY2VkNjc5YjVhNDBhOGMyZjFkM2IxYjgwNDkwYjI5ZTkzODBlZWQ2NDM2MTQ1YTEwNDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.9gTY0pIT8TeJeVKly_RMpOaRaWgiZZH2T_eB5j4Oh0g',
    repo: 'https://github.com/hackclub/onboard/tree/main/projects/snowflake',
    readme: 'This is my snowflake design for Hacky Holidays. It consists of a button, 48 WS2812B LEDs and a XIAO ESP32C3.'
  },
  {
    name: 'LEDPCB',
    description: 'An LED Matrix integrated with a custom ESP32-S3 WROOM-01.',
    image: 'https://cloud-7rbyiaxzr-hack-club-bot.vercel.app/2screenshot_2025-01-13_162029.png',
    repo: 'https://github.com/M0HID/LEDPCB',
    readme: 'Here is my PCB for an LED Matrix integrated with a custom ESP32-S3 WROOM-01. The design includes a USB-C port that can be used to program the chip.'
  }
];

const Examples = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-4rem)] p-4">
      <h1 className="mb-8 text-3xl font-bold text-[#177aff]">Project Examples</h1>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="bg-[#0a1930] rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">{project.name}</h2>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <button
                className="text-sm text-[#177aff] hover:underline"
                onClick={() => setExpanded(expanded === project.name ? null : project.name)}
              >
                {expanded === project.name ? 'Show Less' : 'Show More'}
              </button>
            </div>
            {expanded === project.name && (
              <div className="p-4 bg-[#181732] transition-opacity duration-300 opacity-100">
                <img src={project.image} alt={project.name} className="object-cover w-full h-48 mb-4" />
                <p className="mb-4 text-gray-300">{project.readme}</p>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#177aff] hover:underline"
                >
                  View Repository
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examples; 