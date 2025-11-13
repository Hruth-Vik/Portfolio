import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiDownload } from 'react-icons/hi';

const HireMeModal = ({ open, onClose }) => {
  const DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1xCDLq1BQ6anfhUzlOXFOEVdMfh2mAbAb';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-lg rounded-2xl bg-secondary-900 border border-secondary-700 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Hire Me</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-secondary-300 hover:text-white hover:bg-secondary-800"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>
            <p className="text-secondary-300 mb-4">
              I build scalable data pipelines, robust backends, and delightful frontends. Let's collaborate to deliver impact.
            </p>
            <div className="flex gap-3">
              <a
                href="/contact"
                className="flex-1 btn-primary text-center"
              >
                Let’s Talk
              </a>
              <a
                href={DOWNLOAD_URL}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary-800 text-white border border-secondary-700 hover:bg-secondary-700"
                download="Hruthvik_Naik_Resume.pdf"
              >
                <HiDownload className="w-4 h-4" /> Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HireMeModal;
