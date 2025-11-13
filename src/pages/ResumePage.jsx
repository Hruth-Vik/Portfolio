import React from 'react';

const ResumePage = () => {
  const VIEW_URL = 'https://drive.google.com/file/d/1xCDLq1BQ6anfhUzlOXFOEVdMfh2mAbAb/preview';
  const DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1xCDLq1BQ6anfhUzlOXFOEVdMfh2mAbAb';

  return (
    <section className="py-20 lg:py-24 container-width section-padding">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
        <a
          href={DOWNLOAD_URL}
          className="btn-primary"
          download="Hruthvik_Naik_Resume.pdf"
          rel="noopener noreferrer"
        >
          Download PDF
        </a>
      </div>
      <div className="w-full aspect-[8.5/11] bg-secondary-900 rounded-xl overflow-hidden border border-secondary-700">
        <iframe
          title="Resume Preview"
          src={VIEW_URL}
          className="w-full h-full"
          allow="autoplay"
        />
      </div>
    </section>
  );
};

export default ResumePage;
