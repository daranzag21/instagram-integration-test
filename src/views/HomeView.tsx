export const HomeView = () => (
  <div className='flex flex-col gap-5 p-5 md:p-10'>
    {/* Curator container to display posts - See [index.html] to inspect the curator script */}
    <div id='curator-feed-default-feed-layout'>
      <a href='https://curator.io' target='_blank' className='crt-logo crt-tag'>
        Powered by Curator.io
      </a>
    </div>
  </div>
);
