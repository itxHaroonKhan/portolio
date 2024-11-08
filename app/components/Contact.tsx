import { GoComment } from "react-icons/go";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  return (
    <div
      className='flex items-center justify-center h-screen'
      id='contact'
      style={{
        backgroundImage: 'url("https://i.pinimg.com/originals/f3/d9/c2/f3d9c2149aacff30ea739ea54db67a83.gif")',
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-20 p-6 rounded shadow-md w-1/2">
        <h2 className="text-white text-lg font-bold mb-4">Contact Us</h2>
        
        <form data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Name</label>
            <input type="text" className="border border-gray-300 p-2 w-full" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2"><SiMinutemailer className="inline-block mr-2" />
              Email</label>
            <input type="email" className="border border-gray-300 p-2 w-full" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">
              <GoComment className="inline-block mr-2" />
              Message
            </label>
            <textarea className="border border-gray-300 p-2 w-full" rows={4} placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-7 py-4 rounded active:scale-95 hover:text-black">Send</button>
        </form>
        
   
      </div>
    </div>
  );
};

export default Contact;
