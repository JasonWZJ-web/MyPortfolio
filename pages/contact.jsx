import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import Footer from '../components/Footer';

const YOUR_EMAIL = "zijianw@andrew.cmu.edu";
const YOUR_LINKEDIN = "https://www.linkedin.com/in/zijianwang2025/";
const YOUR_GITHUB = "https://github.com/JasonWZJ-web";

const Contact = () => {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${name || "Someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${fromEmail}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <BannerLayout>
      <div className="px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>

          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">United States</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">Pittsburgh, PA</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">School:</span>
                <span className="text-LightGray md:text-sm">Carnegie Mellon University</span>
              </div>
            </div>

            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">{YOUR_EMAIL}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">LinkedIn:</span>
                <span className="text-LightGray text-sm">zijianwang2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">GitHub:</span>
                <span className="text-LightGray text-sm">JasonWZJ-web</span>
              </div>
            </div>
          </div>
        </div>

        {/* social icons */}
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={`mailto:${YOUR_EMAIL}`}
            rel="noreferrer"
            aria-label="Email"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={YOUR_GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={YOUR_LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* form */}
        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>

          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <div className="flex flex-col w-full">
              <div className="userIcon relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                  <HiUser />
                </div>
                <input
                  type="text"
                  className="input_stylings"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="mailIcon relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                  <HiMail />
                </div>
                <input
                  type="email"
                  className="input_stylings"
                  placeholder="Email"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="textIcon relative mb-6">
                <div className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                  <BsChatTextFill />
                </div>
                <textarea
                  rows={6}
                  className="input_stylings"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <div className="my-4">
              <button
                onClick={handleSend}
                className="button"
                disabled={!message.trim()}
                title={!message.trim() ? "Please enter a message" : "Send"}
              >
                SEND MESSAGE
              </button>
            </div>

            <p className="text-LightGray text-xs">
              This form opens your default email client (no data stored).
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </BannerLayout>
  );
};

export default Contact;
