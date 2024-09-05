const Footer = () => {
  return (
    <div className='bg-[#0E0E0E] text-[#81859F] px-3'>
      <div className='flex flex-col sm:grid grid-cols-[1fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm pt-2'>
        <div>
          <img className='mb-5w-32' src='' alt='FurniFlex' />
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>About US</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Master Plan</li>
            <li>Jobs</li>
            <li>Invest</li>
            <li>Pressroom</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Explore EEVE</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Unlock my Robot Power</li>
            <li>Starlight</li>
            <li>Robot Platform</li>
            <li>EEVE Roadmap</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Community & Support</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Willow X Community</li>
            <li>Developer & Maker Access</li>
            <li>Special Cases</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />

        <div className='flex flex-col sm:grid grid-cols-[1fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
          <div>
            <ul className='flex flex-row gap-2'>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div>
            <ul className='flex flex-row gap-2 text-sm'>
              <li>March22 Recap</li>
              <li>Privacy Policy</li>
              <li>General Terms</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='flex flex-row gap-2'>
            <p>United States(English)</p>
          </div>
        </div>

        <p className='py-5 text-sm text-center'>
          EEVE@2024, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
