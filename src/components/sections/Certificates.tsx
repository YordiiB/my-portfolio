import { motion } from "framer-motion";
import { certificates } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";

const Certificates = () => {
  return (
    <motion.div
      variants={slideIn("up", "tween", 0.2, 1)}
      className="flex flex-col gap-6"
    >
      <p className="text-secondary">My achievements</p>
      <h2 className="text-white text-4xl font-bold">Certificates.</h2>

      {/* Grouped Certificates */}
      <div className="grid gap-10 sm:grid-cols-2">
        {["Microsoft", "Tech", "Other"].map((category) => {
          const filtered = certificates.filter(
            (cert) => cert.category === category
          );

          if (filtered.length === 0) return null;

          return (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">
                {category}
              </h3>

              {filtered.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl bg-black-100 p-6 shadow-md"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {cert.title}
                  </h4>

                  <p className="text-sm text-secondary">
                    {cert.issuer} • {cert.year}
                  </p>

                  {cert.description && (
                    <p className="mt-2 text-sm text-secondary">
                      {cert.description}
                    </p>
                  )}

                  {/* ✅ ADD THIS PART HERE */}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-[#915EFF] hover:underline"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Certificates, "certificates");
