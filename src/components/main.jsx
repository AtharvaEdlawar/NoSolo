export default function Main() {
  return (
    <main className="max-w-screen-xl p-4 mx-auto h-auto pt-20 space-y-8">
      <div className="lg:pl-8 -mt-[40px] flex items-center justify-between flex-wrap md:flex-nowrap max-w-7xl mx-auto">
        <div className="xl:col-span-6 lg:pt-48 lg:pb-56 lg:px-0 lg:grid-cols-7 sm:pb-32 pt-10 pb-24 px-6 md:max-w-xl">
          <div className="lg:mx-0 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white lg:text-5xl font-bold mb-6">
              Welcome to the Spooky Halloween Event
            </h2>
            <p className="lg:text-xl text-gray-500 dark:text-gray-400 md:text-left">
              Join us for a night of fright and fun
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 gap-x-6 mt-10">
              <a className="flex items-center font-medium py-3 px-5 rounded-lg text-white bg-primary-600 hover:bg-primary-700 cursor-pointer transition-colors ease-in-out w-full sm:w-auto">
                Get Tickets
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block xl:max-w-xl max-w-full md:max-w-sm">
          <img
            className="hidden md:block object-cover overflow-hidden h-96 md:h-full w-full"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b29814cf57-3b32ff9ae750d2a48f86.png"
            alt="Img"
          />
        </div>
      </div>

      {/* <!-- <section className="bg-white dark:bg-gray-900"> -->*/}
      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div
            className="font-light"
            text-gray-500
            sm:text-lg
            dark:text-gray-400
            order-first
          >
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Performing Artists
            </h2>
            <p className="mb-4 dark:text-gray-400 font-light">
              Discover the electrifying lineup of artists set to make this
              Halloween event unforgettable.
            </p>
          </div>
          <div className="order-last">
            <img
              className="w-full rounded-lg"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b29814cf57-f0db940bb3af05dc6fa9.png"
              alt="Img"
            />
          </div>
        </div>
      </section>

      {/* <section className="bg-white dark:bg-gray-900"> --> */}
      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div
            className="font-light"
            text-gray-500
            sm:text-lg
            dark:text-gray-400
            order-last
          >
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Performing Artists
            </h2>
            <p className="mb-4 dark:text-gray-400 font-light">
              Discover the captivating talents performing at our Halloween
              event. Get ready to be mesmerized by spooky performances that will
              leave you spellbound.
            </p>
          </div>
          <div className="order-first">
            <img
              className="w-full rounded-lg"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b29814cf57-fa6670ba206839213c70.png"
              alt="Img"
            />
          </div>
        </div>
      </section>

      {/*<!-- <section className="bg-white dark:bg-gray-900"> -->*/}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Performing Artists
            </h2>
            <p className="mb-4 font-light dark:text-gray-400">
              Discover our lineup of talented performers ready to entertain you
              with music, dance, and magic at our Halloween event.
            </p>

            <a className="inline-flex items-center cursor-pointer font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
              See Artists
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div>
        <div className="mx-auto w-full px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sm:flex-row md:h-80">
            <div className="order-first h-48 w-full bg-white dark:bg-gray-800 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b29814cf57-1fd1140abfbebac42109.png"
                loading="lazy"
                alt="Img"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
                Call to Action
              </h2>

              <p className="font-light text-gray-500 dark:text-gray-400 md:text-lg max-w-md">
                Get ready for a spooky night of music, magic, and more!
              </p>

              <div className="mt-auto">
                <a className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
