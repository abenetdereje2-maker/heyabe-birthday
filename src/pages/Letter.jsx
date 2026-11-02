
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Heart, Sparkles, ArrowLeft } from "lucide-react";

function Letter() {
  const { language } = useLanguage();

  const letter = {
    en: {
      title: "A Special Birthday Letter",
      greeting: "Dear Heyabe,",
      paragraph1:
        "Happy Birthday! Today is a beautiful opportunity to celebrate you and all the wonderful things that make you special.",
      paragraph2:
        "May your new year bring you happiness, success, good health, and many beautiful memories. May you continue learning, growing, and achieving your dreams.",
      paragraph3:
        "Thank you for being part of my life and for sharing so many wonderful moments. I hope your birthday is filled with smiles and unforgettable memories.",
      ending: "With warm wishes,",
      signature: "Abi ❤️",
      back: "Back to Home",
    },

    am: {
      title: "ልዩ የልደት ደብዳቤ",
      greeting: "ውድ ሄያቤ፣",
      paragraph1:
        "መልካም ልደት! ዛሬ አንቺንና ልዩ የሚያደርጉሽን ቆንጆ ባህሪያት ለማክበር የሚያምር ቀን ነው።",
      paragraph2:
        "አዲሱ ዓመትሽ ደስታን፣ ስኬትን፣ ጤናንና ብዙ ውብ ትዝታዎችን ይዞልሽ ይምጣ። ሁልጊዜ በመማር፣ በማደግና ህልሞችሽን በማሳካት ቀጥይ።",
      paragraph3:
        "የሕይወቴ ክፍል ስለሆንሽና ብዙ ውብ ጊዜያትን ስላካፈልሽኝ አመሰግናለሁ። ልደትሽ በፈገግታና በማይረሱ ትዝታዎች የተሞላ ይሁን።",
      ending: "በመልካም ምኞት፣",
      signature: "አቢ ❤️",
      back: "ወደ መነሻ ተመለስ",
    },
  };

  const content = letter[language] || letter.en;

  return (
    <main className="letter-page">

      <div className="letter-decoration decoration-one">
        <Heart fill="currentColor" />
      </div>

      <div className="letter-decoration decoration-two">
        <Sparkles />
      </div>

      <div className="letter-container">

        <Link to="/" className="letter-back">
          <ArrowLeft size={17} />
          {content.back}
        </Link>

        <article className="letter-card">

          <div className="letter-top-icon">
            <Heart size={28} fill="currentColor" />
          </div>

          <div className="letter-heading">
            <Sparkles size={19} />
            <span>A MESSAGE FROM THE HEART</span>
            <Sparkles size={19} />
          </div>

          <h1>{content.title}</h1>

          <div className="letter-divider">
            <span />
            <Heart size={17} fill="currentColor" />
            <span />
          </div>

          <div className="letter-content">
            <h2>{content.greeting}</h2>

            <p>{content.paragraph1}</p>
            <p>{content.paragraph2}</p>
            <p>{content.paragraph3}</p>

            <div className="letter-ending">
              <p>{content.ending}</p>
              <h2 className="signature">
                {content.signature}
              </h2>
            </div>
          </div>

          <div className="letter-bottom">
            <Sparkles size={18} />
            <span>Made with care</span>
            <Heart size={18} fill="currentColor" />
          </div>

        </article>
      </div>
    </main>
  );
}

export default Letter;
