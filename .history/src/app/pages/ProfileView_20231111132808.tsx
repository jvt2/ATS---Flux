import * as React from "react";
import { app, analytics } from '../firebase';

function MyComponent(props) {
  return (
    <div className="items-stretch bg-white flex flex-col">
      <div className="items-start bg-white flex w-full flex-col px-5">
        <div className="items-stretch bg-white self-stretch flex w-full flex-col -mr-5 pt-7 pb-2 px-4">
          <div className="justify-between items-stretch flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20118fcd-1bae-44c5-9457-008120143e61?apiKey=e48314d4075e42db972478e94e0afa25&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d42c7922-2131-4b74-a620-d89123df208c?apiKey=e48314d4075e42db972478e94e0afa25&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="text-stone-900 text-3xl font-bold leading-9 tracking-tighter whitespace-nowrap mt-5">
            Hire Talent
          </div>
        </div>
        <div className="justify-between bg-lime-50 self-center flex w-full flex-col mt-3 px-4 py-3 rounded-3xl">
          <div className="items-stretch flex w-[178px] max-w-full gap-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae8c096d-b12d-4ef9-8611-3e31388a172c?apiKey=e48314d4075e42db972478e94e0afa25&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-stone-500 text-base leading-6 whitespace-nowrap">
              Search for talent...
            </div>
          </div>
        </div>
        <div className="items-stretch flex w-32 max-w-full flex-col mt-7 self-start max-md:-ml-1">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/169f9108-d636-46f4-9b09-ffa2ad4a9652?apiKey=e48314d4075e42db972478e94e0afa25&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/169f9108-d636-46f4-9b09-ffa2ad4a9652?apiKey=e48314d4075e42db972478e94e0afa25&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/169f9108-d636-46f4-9b09-ffa2ad4a9652?apiKey=e48314d4075e42db972478e94e0afa25&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/169f9108-d636-46f4-9b09-ffa2ad4a9652?apiKey=e48314d4075e42db972478e94e0afa25&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/169f9108-d636-46f4-9b09-ffa2ad4a9652?apiKey=e48314d4075e42db972478e94e0afa25&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/169f9108-d636-46f4-9b09-ffa2ad4a9652?apiKey=e48314d4075e42db972478e94e0afa25&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/169f9108-d636-46f4-9b09-ffa2ad4a9652?apiKey=e48314d4075e42db972478e94e0afa25&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/169f9108-d636-46f4-9b09-ffa2ad4a9652?apiKey=e48314d4075e42db972478e94e0afa25&"
            className="aspect-square object-contain object-center w-full overflow-hidden"
          />
          <div className="text-stone-900 text-2xl font-bold leading-7 tracking-tight whitespace-nowrap mt-3">
            John Doe
          </div>
          <div className="text-stone-500 text-base leading-6 whitespace-nowrap">
            UX/UI Designer
          </div>
        </div>
        <div className="justify-center items-center bg-lime-50 self-center flex flex-col mt-4 px-5 py-2.5 rounded-3xl">
          <div className="text-stone-900 text-sm font-bold leading-5 tracking-wide whitespace-nowrap items-stretch bg-lime-50 w-[100px] max-w-full">
            View Portfolio
          </div>
        </div>
        <div className="self-center flex justify-between gap-5 mt-8">
          <div className="items-stretch flex basis-[0%] flex-col">
            <div className="text-stone-900 text-4xl font-extrabold leading-10 tracking-tighter whitespace-nowrap">
              4.5
            </div>
            <div className="items-stretch flex gap-0.5 mt-2 max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9895b8da-a9ef-46a8-8841-857e481932e6?apiKey=e48314d4075e42db972478e94e0afa25&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a3084f8-a6c6-4325-8806-0de1204242e7?apiKey=e48314d4075e42db972478e94e0afa25&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/631209d6-483c-4b95-806d-a290462e5547?apiKey=e48314d4075e42db972478e94e0afa25&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a615148b-6f9c-4f1f-9e81-46e2207dcbe7?apiKey=e48314d4075e42db972478e94e0afa25&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7244701f-6b64-49b3-b0cc-b269f6957f7b?apiKey=e48314d4075e42db972478e94e0afa25&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="text-stone-900 text-base leading-6 whitespace-nowrap mt-2">
              150 reviews
            </div>
          </div>
          <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
            <div className="flex items-center justify-between gap-0 max-md:justify-center">
              <div className="self-stretch text-stone-900 text-sm leading-5">
                5
              </div>
              <div className="items-stretch rounded bg-stone-300 flex grow basis-[0%] flex-col my-auto">
                <div className="items-start rounded bg-emerald-600 flex shrink-0 h-2 flex-col" />
              </div>
              <div className="self-stretch text-stone-500 text-sm leading-5 whitespace-nowrap">
                50%
              </div>
            </div>
            <div className="flex items-center justify-between gap-0 mt-3 max-md:justify-center">
              <div className="self-stretch text-stone-900 text-sm leading-5">
                4
              </div>
              <div className="items-stretch rounded bg-stone-300 flex grow basis-[0%] flex-col my-auto">
                <div className="items-start rounded bg-emerald-600 flex shrink-0 h-2 flex-col" />
              </div>
              <div className="self-stretch text-stone-500 text-sm leading-5">
                25%
              </div>
            </div>
            <div className="flex items-center justify-between gap-0 mt-3 max-md:justify-center">
              <div className="self-stretch text-stone-900 text-sm leading-5">
                3
              </div>
              <div className="items-stretch rounded bg-stone-300 flex grow basis-[0%] flex-col my-auto">
                <div className="items-start rounded bg-emerald-600 flex shrink-0 h-2 flex-col" />
              </div>
              <div className="self-stretch text-stone-500 text-sm leading-5">
                15%
              </div>
            </div>
            <div className="flex items-center justify-between gap-0 mt-3 max-md:justify-center">
              <div className="self-stretch text-stone-900 text-sm leading-5">
                2
              </div>
              <div className="items-stretch rounded bg-stone-300 flex grow basis-[0%] flex-col my-auto">
                <div className="items-start rounded bg-emerald-600 flex shrink-0 h-2 flex-col" />
              </div>
              <div className="self-stretch text-stone-500 text-sm leading-5">
                5%
              </div>
            </div>
            <div className="flex items-center justify-between gap-0 mt-3 max-md:justify-center">
              <div className="self-stretch text-stone-900 text-sm leading-5">
                1
              </div>
              <div className="items-stretch rounded bg-stone-300 flex grow basis-[0%] flex-col my-auto">
                <div className="items-start rounded bg-emerald-600 flex shrink-0 h-2 flex-col" />
              </div>
              <div className="self-stretch text-stone-500 text-sm leading-5">
                5%
              </div>
            </div>
          </div>
        </div>
        <div className="text-stone-900 text-base leading-6 self-center whitespace-nowrap mt-5">
          John Doe is a skilled UX/UI designer with over 10 years of experience
          in the field. He has a strong portfolio showcasing his ability to
          create user-friendly and aesthetically pleasing designs.
        </div>
        <div className="justify-center items-center bg-emerald-600 self-center flex flex-col mt-24 px-5 py-3 rounded-3xl max-md:mt-10">
          <div className="text-white text-base font-bold leading-6 tracking-wide whitespace-nowrap items-stretch bg-emerald-600 aspect-[2.9166666666666665]">
            Connect
          </div>
        </div>
        <div className="items-stretch bg-white self-stretch flex w-full flex-col -mr-5 mt-3 px-4 py-3 border-t-lime-50 border-t border-solid">
          <div className="flex justify-between gap-5 pl-6 pr-6 py-0.5 max-md:justify-center max-md:px-5">
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cd71a5b-dd62-424d-86df-0c07f4adb31e?apiKey=e48314d4075e42db972478e94e0afa25&"
                className="aspect-[1.5] object-contain object-center w-9 overflow-hidden"
              />
              <div className="text-stone-900 text-center text-xs font-medium leading-5 tracking-normal whitespace-nowrap mt-2">
                Home
              </div>
            </div>
            <div className="items-center flex grow basis-[0%] flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/525f32d9-36dc-42d4-982e-9d170c53b06f?apiKey=e48314d4075e42db972478e94e0afa25&"
                className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
              />
              <div className="text-stone-500 text-center text-xs font-medium leading-5 tracking-normal self-stretch whitespace-nowrap mt-2">
                Browse
              </div>
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/01dd75de-181c-4aad-ac17-8ffcef615d43?apiKey=e48314d4075e42db972478e94e0afa25&"
                className="aspect-[1.46] object-contain object-center w-[35px] overflow-hidden"
              />
              <div className="text-stone-500 text-center text-xs font-medium leading-5 tracking-normal whitespace-nowrap mt-2">
                Chats
              </div>
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d6cf3f1-df35-4557-9c06-4a41e05c6d98?apiKey=e48314d4075e42db972478e94e0afa25&"
                className="aspect-[1.63] object-contain object-center w-[39px] overflow-hidden"
              />
              <div className="text-stone-500 text-center text-xs font-medium leading-5 tracking-normal whitespace-nowrap mt-2">
                Profile
              </div>
            </div>
          </div>
        </div>
        <div className="items-start bg-white self-stretch flex min-h-[20px] w-full flex-col -mr-5" />
      </div>
    </div>
  );
}

