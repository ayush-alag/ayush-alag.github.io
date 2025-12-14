import { Github, Linkedin, Mail } from 'lucide-react';

// ============================================================================
// EDIT YOUR CONTENT HERE - Easy to modify!
// ============================================================================

const PERSONAL_INFO = {
  name: "Ayush Alag",
  email: "aalag@stanford.edu",
  profilePhoto: "/profile.jpg", // Add your photo to the public folder and update this path
  links: {
    // TODO: replace with the real Allergezy article URL
    allergezyArticle: "https://www.sfchronicle.com/health/article/Why-is-there-not-something-better-Teen-13525123.php",
  },
  social: {
    github: "https://github.com/ayushalag",
    linkedin: "https://linkedin.com/in/ayushalag",
    twitter: "https://x.com/Ayushalag1" // X/Twitter profile
  }
};

// ============================================================================
// WEBSITE COMPONENTS (You probably don't need to edit below this line)
// ============================================================================

// Custom X Logo Component
const XLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-sophisticated">
      <main className="px-8">
        <section className="max-w-2xl mx-auto py-20">
          <div className="flex flex-col">
            {/* Photo */}
            <div>
              <div className="w-[140px] h-[140px] rounded-full overflow-hidden bg-gray-200">
                {PERSONAL_INFO.profilePhoto && PERSONAL_INFO.profilePhoto !== "" ? (
                  <img
                    src={PERSONAL_INFO.profilePhoto}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 70%' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className="w-full h-full flex items-center justify-center text-gray-600"
                  style={{ display: PERSONAL_INFO.profilePhoto ? 'none' : 'flex' }}
                >
                  <div className="text-lg font-bold">
                    {PERSONAL_INFO.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="mt-5 mb-5 h-fit text-gray-800 leading-relaxed space-y-6">
              <h1 className="text-[25px] font-bold text-gray-900">Hi, I'm Ayush.</h1>

              <p className="text-[16px] text-gray-700">
                I'm currently studying parallel computing and model finetuning at Stanford, and spent the summer working on compound agents at Mithril. In a not-so-distant past, I was a developer at Five Rings working on trading signals and enjoyed trying every Indian restaurant in NYC. At Princeton, I spent 50% of my time taking graduate AI classes and 50% on three dance teams. I peaked in high school by developing the first genomic test for allergies and starting a{" "}
                <a
                  href={PERSONAL_INFO.links.allergezyArticle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:underline hover:underline-offset-2"
                >
                  company
                </a>
                .
              </p>

              <p className="text-[16px] text-gray-700">
                I enjoy thinking in systems and incentives, and am broadly interested in algorithmic design, societal development, and the intersection of technology and human behavior. In my free time, I enjoy writing and philosophizing.
              </p>

              <p className="text-[16px] text-gray-700">
                I also angel invest in a handful of startups, and am always excited to chat with founders.
              </p>

              <div className="pt-2 text-sm text-gray-500">—</div>
            </div>

            <div className="flex items-center justify-start space-x-4 mt-[30px] mb-[30px] mx-2.5">
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <XLogo className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
