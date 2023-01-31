export default function Footer() {
  return (
    <footer className="py-8 border-t-[1px] text-[#344054] border-t-[#EAECF0] mt-16 flex max-md:flex-col">
      <a href="/" title="home">
        <img src="/logo.png" alt="logo" className="h-5 w-20" />
      </a>
      <span className="mt-6 md:mt-0 md:ml-10">
        © 2077 Sark. All rights reserved.
      </span>
      <div className="flex mt-2 md:mt-0 md:ml-auto">
        <a href="#">Terms of Service</a>
        <a href="#" className="ml-7">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
