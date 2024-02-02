import React from 'react';

function Card({username, btnText="Visit me"}){   //here if btnText value not defined it will use "Visit me"
    console.log(username);
    return (
        <div className="mx-auto w-[300px] rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{username}</h1>
          <h6 className="mt-3 font-medium">Founder and CEO, DevUI</h6>
          <p className="mt-3 text-md text-white">
            {/* {btnText || "Visit me on X"} */ }
            {btnText}
          </p>
          <div className="mt-4 flex flex-wrap">
            <div className="w-auto p-1.5">
              <a href="#">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                      fill="#27272A"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Card