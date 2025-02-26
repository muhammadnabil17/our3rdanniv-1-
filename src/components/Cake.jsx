import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CakeSVG, confetti } from "../assets";

function Cake() {
  const [candlesBlownOut, setCandlesBlownOut] = useState(false);

  // Fungsi untuk mematikan lilin saat diklik
  const handleCandleClick = () => {
    setCandlesBlownOut(true);
  };

  return (
    <div 
      className="bg-black/80 h-screen w-screen flex items-center justify-center overflow-hidden relative"
      onClick={handleCandleClick} // Lilin padam saat klik
    >
      {candlesBlownOut && (
        <div
          className="absolute inset-0 bg-cover bg-center z-50"
          style={{ backgroundImage: `url(${confetti})` }}
        />
      )}

      {candlesBlownOut && (
        <motion.div
          className="absolute top-20 text-white text-3xl font-bold z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <svg width="800" height="200" viewBox="0 0 400 200">
            <defs>
              <path id="curve" d="M50,150 Q200,50 350,150" fill="transparent" stroke="white" />
            </defs>
            <text fontSize="40" fill="white" textAnchor="middle">
              <textPath href="#curve" startOffset="50%">
                Happy Birthday!
              </textPath>
            </text>
          </svg>
        </motion.div>
      )}

      <div className="relative z-10">
        <div className="absolute -top-48 left-1/2 transform -translate-x-1/2">
          <div className="candle">
            {!candlesBlownOut && (
              <div>
                {/* Hilangkan teks "blow" dan gunakan event klik */}
                <div onClick={handleCandleClick}>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <CakeSVG />
      </div>
    </div>
  );
}

export default Cake;
