import { useRef } from "react";

const Form = () => {

    const emailRef = useRef(null)

  return (
    <>
      <form className="bg-white bg-opacity-5 p-4 py-6 pb-8 md:p-8 md:pb-10 w-full max-w-[600px] rounded-xl">
        <label htmlFor="input-group-1" className="font-light tracking-wide">Email</label>
        <div className="relative mb-6 mt-1">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="email"
            id="input-group-1"
            className=" border text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white opacity-75 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:opacity-100"
            placeholder="name@email.com"
            ref={emailRef}
            required
          />
        </div>
        <button className="bg-[#986AEB] w-full py-2 rounded-lg opacity-90 hover:opacity-100 hover:shadow-lg hover:shadow-[#976aeb31] transition-all">Join waitlist</button>
      </form>
    </>
  );
};

export default Form;
