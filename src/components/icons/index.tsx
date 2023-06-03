// Para mais ícones, acesse: https://heroicons.com/
// Para mais ícones, acesse: https://react-icons.github.io/react-icons
// Para mais ícones, acesse: https://devicon.dev/

import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import Me from "../../../public/images/Me.jpeg";

export function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

export function ResponsiveIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 512.000000 512.000000">
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#ffffff"
        stroke="none"
      >
        <path
          d="M323 4955 c-153 -33 -283 -168 -313 -324 -6 -35 -10 -577 -10 -1540
        0 -1601 -2 -1539 50 -1642 45 -87 143 -168 244 -202 44 -15 128 -17 803 -17
        l753 0 0 -285 0 -285 -143 0 c-134 0 -146 -2 -196 -26 -83 -42 -141 -137 -141
        -233 0 -56 38 -137 84 -179 75 -69 97 -72 523 -72 l373 0 -26 42 c-39 61 -73
        142 -96 228 -20 70 -21 109 -25 613 l-5 537 -904 0 c-887 0 -904 0 -924 20
        -11 11 -22 30 -25 42 -3 13 -4 681 -3 1485 l3 1462 23 23 23 23 2169 0 2169 0
        23 -23 c23 -22 23 -24 26 -355 l3 -333 82 -16 c49 -11 117 -35 170 -61 l87
        -43 0 392 c0 223 -4 414 -10 445 -21 111 -102 223 -204 283 -100 58 11 56
        -2351 55 -1780 0 -2181 -3 -2232 -14z"
        />
        <path
          d="M2892 3569 c-148 -29 -276 -147 -322 -297 -20 -62 -20 -98 -20 -1396
        0 -1079 3 -1340 14 -1381 39 -148 140 -257 284 -306 51 -17 89 -19 462 -19
        l406 0 -27 58 c-37 78 -49 169 -49 376 l0 176 -375 0 -375 0 0 1190 c0 1326
        -5 1239 68 1260 26 8 300 10 899 8 l863 -3 27 -28 28 -27 3 -385 3 -385 102 0
        c96 -1 138 -9 220 -45 16 -7 17 16 17 401 0 448 -6 503 -57 591 -61 106 -179
        192 -292 213 -66 12 -1816 12 -1879 -1z"
        />
        <path
          d="M4000 2187 c-47 -15 -116 -86 -129 -133 -7 -26 -11 -308 -11 -864 0
        -776 2 -827 19 -865 19 -43 78 -100 118 -116 14 -5 228 -9 494 -9 445 0 472 1
        508 19 50 26 97 81 110 128 7 25 11 316 11 858 l0 820 -24 50 c-27 59 -46 77
        -106 104 -43 20 -63 21 -500 20 -304 -1 -467 -5 -490 -12z m860 -927 l0 -680
        -370 0 -370 0 0 680 0 680 370 0 370 0 0 -680z m-308 -810 c26 -27 30 -36 25
        -68 -8 -46 -47 -82 -88 -82 -42 0 -89 48 -89 90 0 22 9 41 29 61 40 40 82 39
        123 -1z"
        />
      </g>
    </svg>
  );
}

export function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-3 h-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </svg>
  );
}

export function DoorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
      />
    </svg>
  );
}

export function HoveredDoorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
      />
    </svg>
  );
}

// --------------------------- STACKS ---------------------------//

export function ReactIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-6 h-6">
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4"></circle>
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
      </g>
    </svg>
  );
}

export function TypescriptIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-6 h-6">
      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
      <path
        data-name="original"
        fill="#007acc"
        d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
      ></path>
    </svg>
  );
}

export function JavascriptIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-6 h-6">
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
      <path
        fill="#323330"
        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
      ></path>
    </svg>
  );
}

export function TailwindcssIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-16 h-16">
      <defs>
        <linearGradient
          id="tailwindcss-original-wordmark-a"
          gradientUnits="userSpaceOnUse"
          x1="2.21"
          y1="511.596"
          x2="3.211"
          y2="511.596"
          gradientTransform="matrix(27.16757 5.6391 -9.3985 16.30055 4747.487 -8290.643)"
        >
          <stop offset="0" stopColor="#2298bd"></stop>
          <stop offset="1" stopColor="#0ed7b5"></stop>
        </linearGradient>
      </defs>
      <path
        d="M13.227 56.074c-3.528 0-5.727 1.778-6.602 5.301 1.324-1.773 2.875-2.426 4.625-1.977 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.977-1-.25-1.722-.977-2.523-1.801-1.301-1.324-2.801-2.852-6.074-2.852zM6.602 64C3.074 64 .875 65.773 0 69.3c1.324-1.777 2.875-2.425 4.625-1.976 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.972-1-.25-1.722-.972-2.523-1.796C11.398 65.523 9.898 64 6.602 64zm0 0"
        fill="url(#tailwindcss-original-wordmark-a)"
      ></path>
      <path
        d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.8-2.176l1.726-1c.3.852 1.05 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.403-2.848 1.523 0 2.796.699 3.449 1.921l-1.7.954c-.328-.727-.976-1.051-1.75-1.051-.726-.028-1.351.3-1.351.949zm0 0"
        fill="#2d3748"
      ></path>
    </svg>
  );
}

export function NextJstIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-6 h-6 bg-white rounded-full">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
    </svg>
  );
}

export function StyledComponentstIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m18.05 29.6c.042-.095.148-.161.225-.241 1.175-1.232 2.36-2.453 3.519-3.7a3.2 3.2 0 0 0 1.014-2.659 5.925 5.925 0 0 0 -.143-.624c-.316.3-.61.573-.906.848-.46.428-.918.858-1.382 1.281a1.931 1.931 0 0 1 -2.148.419 1.973 1.973 0 0 1 -1.29-1.75 1.04 1.04 0 0 0 -.043-.146c-.353.3-.691.576-1.026.86l-6.963 5.9c-.048.041-.1.092-.145.132h9.283l-.014-.009c-.05-.035-.024-.219.019-.311z"
        fill="#ffcebf"
      />
      <path
        d="m8.337 29.6a1.239 1.239 0 0 1 .295-.276l9.636-8.175q.986-.837 1.963-1.683a.523.523 0 0 0 .182-.224 5.364 5.364 0 0 0 .065-2.069c-.1.07-.154.1-.2.149-.789.706-1.574 1.418-2.367 2.12a1.762 1.762 0 0 1 -2.048.329 1.889 1.889 0 0 1 -1.08-1.807c0-.085 0-.169 0-.324-.145.106-.251.177-.35.257q-5.785 4.632-11.568 9.257c-.174.139-.382.449-.61.148s.119-.425.294-.565q6.165-4.947 12.336-9.885c.67-.537.714-.762.278-1.615l-.26.244c-.713.663-1.434 1.317-2.136 1.991a2.121 2.121 0 0 1 -3.585-1.337c-.133.1-.248.173-.357.258l-6.1 4.728a1.485 1.485 0 0 1 -.356.258.446.446 0 0 1 -.3-.015v8.561h6.256a.365.365 0 0 1 .012-.325z"
        fill="#ffcebf"
      />
      <path
        d="m25.237 2.423c-.17.557-.335 1.115-.484 1.678a1.688 1.688 0 0 0 .9 2.09 7.122 7.122 0 0 0 3.818.8v-4.473a.73.73 0 0 1 .016-.294.666.666 0 0 1 .105-.149h-4.359c.067.078.044.215.004.348z"
        fill="#ff6196"
      />
      <g fill="#ff87af">
        <path d="m16.482 12.032a2.422 2.422 0 0 1 -.5 1.376 22.671 22.671 0 0 1 -3.726 3.792 1.442 1.442 0 0 1 -1.684.2 1.393 1.393 0 0 1 -.843-1.368 1.624 1.624 0 0 1 .417-.947 35.848 35.848 0 0 1 5.019-3.993.71.71 0 0 1 .829-.034 1.041 1.041 0 0 1 .488.974z" />
        <path d="m15.284 18.093a1.437 1.437 0 0 1 .448-1.2 38.336 38.336 0 0 1 4.87-3.813c.052-.033.1-.066.157-.1a.837.837 0 0 1 1.025.035.861.861 0 0 1 .242.979 4.39 4.39 0 0 1 -1.168 1.908c-1.105 1.1-2.252 2.164-3.4 3.22a1.124 1.124 0 0 1 -1.364.192 1.512 1.512 0 0 1 -.81-1.221z" />
        <path d="m22.5 18.754c-.28.3-.568.586-.837.893a1.89 1.89 0 0 0 -.2.38c.148.044.321.16.441.119.611-.205 1.207-.451 1.878-.71-.146.336-.256.646-.411.93a12.189 12.189 0 0 1 -2.371 2.872q-.532.513-1.105.981a1.484 1.484 0 0 1 -2.415-.92 1.1 1.1 0 0 1 .238-.813 22.187 22.187 0 0 1 4.623-3.823.193.193 0 0 1 .065-.013z" />
      </g>
      <path
        d="m24.794 14.771 1.711-7.6 1.2.281-.619 1.881c-.578 1.75-1.163 3.5-1.727 5.252-.11.324-.254.384-.565.186z"
        fill="#ff6196"
      />
      <path
        d="m22.862 19.241c.181-.691.361-1.33.513-1.976a4.468 4.468 0 0 1 .826-1.721c.243-.319.516-.192.795-.123.258.063.323.252.334.5a2.845 2.845 0 0 1 -.588 1.907 4.8 4.8 0 0 1 -1.88 1.413z"
        fill="#ff6196"
      />
      <path d="m29.993 2.894a3.623 3.623 0 0 0 -.017-.668.291.291 0 0 0 -.116-.151.381.381 0 0 0 -.152-.075c-.032-.006-.077.027-.12.074a.666.666 0 0 0 -.105.149.73.73 0 0 0 -.016.294v4.472a7.122 7.122 0 0 1 -3.818-.8 1.688 1.688 0 0 1 -.9-2.09c.149-.563.314-1.121.484-1.678.04-.133.063-.27 0-.348a.2.2 0 0 0 -.135-.064.3.3 0 0 0 -.182.064.434.434 0 0 0 -.171.19c-.2.6-.376 1.206-.529 1.818a2.148 2.148 0 0 0 -.046.737 2.339 2.339 0 0 0 1.542 2c.189.079.3.157.247.406-.073.316-.144.632-.216.949q-.735 3.222-1.462 6.447a.483.483 0 0 1 -.121.257 3.228 3.228 0 0 0 -.791.92 4.8 4.8 0 0 0 -.53 1.5.981.981 0 0 1 -.558.785c-.417.211-.8.484-1.263.768a12.639 12.639 0 0 0 -.018-1.671 1.062 1.062 0 0 1 .284-.96 4.75 4.75 0 0 0 1.258-2.194 1.294 1.294 0 0 0 -1.208-1.7 1.7 1.7 0 0 0 -.929.264c-.957.646-1.888 1.332-2.812 2.026-.547.412-1.062.868-1.592 1.3a.418.418 0 0 1 -.059-.081.842.842 0 0 0 -.059-.214c-.443-.684-.136-1.181.345-1.692a2.793 2.793 0 0 0 .772-1.951 1.568 1.568 0 0 0 -.327-1.026 1.459 1.459 0 0 0 -.438-.363 1.337 1.337 0 0 0 -1.517.162l-.279.2c-.637.456-1.282.9-1.895 1.388-.895.712-1.769 1.454-2.626 2.214-.4.353-.692.835-1.107 1.163-2.164 1.709-4.351 3.387-6.53 5.076a1.022 1.022 0 0 0 -.205.161.164.164 0 0 0 -.016.029c-.046.107-.085.284-.031.349a.141.141 0 0 0 .047.033.446.446 0 0 0 .3.015 1.485 1.485 0 0 0 .356-.258l6.1-4.728c.109-.085.224-.162.357-.258a2.121 2.121 0 0 0 3.585 1.337c.7-.674 1.423-1.328 2.136-1.991l.26-.244c.436.853.392 1.078-.278 1.615q-6.176 4.942-12.343 9.886c-.175.14-.521.267-.294.565s.436-.009.61-.148q5.786-4.621 11.564-9.254c.1-.08.205-.151.35-.257v.324a1.889 1.889 0 0 0 1.08 1.807 1.762 1.762 0 0 0 2.048-.329c.793-.7 1.578-1.414 2.367-2.12.05-.045.108-.079.2-.149a5.364 5.364 0 0 1 -.065 2.069.523.523 0 0 1 -.182.224q-.978.845-1.963 1.683l-9.632 8.176a1.239 1.239 0 0 0 -.295.276.365.365 0 0 0 -.012.321.376.376 0 0 0 .32.063.294.294 0 0 0 .116-.065c.05-.04.1-.091.145-.132l6.963-5.9c.335-.284.673-.564 1.026-.86a1.04 1.04 0 0 1 .043.146 1.973 1.973 0 0 0 1.29 1.75 1.931 1.931 0 0 0 2.148-.419c.464-.423.922-.853 1.382-1.281.3-.275.59-.551.906-.848a5.925 5.925 0 0 1 .143.624 3.2 3.2 0 0 1 -1.014 2.649c-1.159 1.248-2.344 2.469-3.519 3.7-.077.08-.183.146-.225.241s-.069.281-.019.321l.014.009a.573.573 0 0 0 .338.051.136.136 0 0 0 .081-.051c.028-.029.055-.065.082-.092.952-.984 1.909-1.963 2.854-2.954a13.982 13.982 0 0 0 1.074-1.223 3.411 3.411 0 0 0 .61-3.616.516.516 0 0 1 .074-.386c.065-.112.137-.221.211-.329a4.632 4.632 0 0 0 .587-1 7.547 7.547 0 0 1 1.339-2.4 2.792 2.792 0 0 0 .5-2.469.988.988 0 0 1 0-.489c.506-1.567 1.027-3.129 1.543-4.692q.347-1.05.69-2.094l.213-.647c.454 0 .882-.009 1.308 0 .354.01.462-.156.458-.5-.021-1.38-.013-2.759-.013-4.138zm-17.737 14.306a1.442 1.442 0 0 1 -1.684.2 1.393 1.393 0 0 1 -.843-1.368 1.624 1.624 0 0 1 .417-.947 35.848 35.848 0 0 1 5.019-3.993.852.852 0 0 1 .326-.14.656.656 0 0 1 .238 0 .763.763 0 0 1 .265.106 1.041 1.041 0 0 1 .488.975 2.422 2.422 0 0 1 -.5 1.376 22.671 22.671 0 0 1 -3.726 3.791zm5.2 1.929a1.124 1.124 0 0 1 -1.364.192 1.512 1.512 0 0 1 -.81-1.224 1.437 1.437 0 0 1 .448-1.2 38.336 38.336 0 0 1 4.87-3.813c.052-.033.1-.066.157-.1a.837.837 0 0 1 1.025.035.861.861 0 0 1 .242.979 4.39 4.39 0 0 1 -1.168 1.908c-1.103 1.102-2.25 2.163-3.398 3.219zm5.911 1.241a12.189 12.189 0 0 1 -2.367 2.868q-.532.513-1.105.981a1.484 1.484 0 0 1 -2.415-.92 1.1 1.1 0 0 1 .238-.813 22.187 22.187 0 0 1 4.623-3.823.193.193 0 0 1 .065-.013l.1.1c-.28.3-.568.586-.837.893a1.89 1.89 0 0 0 -.2.38c.148.044.321.16.441.119.483-.162.958-.35 1.467-.55l.411-.16c-.154.34-.264.65-.419.934zm1.373-2.535a4.363 4.363 0 0 1 -1.373 1.152q-.247.138-.507.258c.178-.681.356-1.312.507-1.95l.006-.026a4.468 4.468 0 0 1 .826-1.721c.243-.319.516-.192.795-.123.258.063.323.252.334.5a2.845 2.845 0 0 1 -.586 1.906zm2.34-8.5c-.578 1.75-1.163 3.5-1.727 5.252-.106.329-.25.389-.561.191l1.483-6.593.228-1.012 1.2.281c-.082.247-.161.49-.241.731z" />
    </svg>
  );
}

export function FirebaseIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-6 h-6">
      <g fill="#f58220">
        <path d="M11.4 115.62H8.25v-24.4H22.5v3.01H11.4v8.02h10.04v2.93H11.42v10.44h-.02zM27.92 94.74c-.43.43-.96.64-1.57.64-.61 0-1.15-.21-1.57-.64-.43-.43-.64-.96-.64-1.57s.21-1.15.64-1.57c.43-.43.96-.64 1.57-.64.61 0 1.15.21 1.57.64s.64.96.64 1.57-.22 1.11-.64 1.57zm0 20.88h-3.14v-16.7h3.14v16.7zM34.47 115.62h-3.14v-16.7h3.01v2.72h.13c.32-.91.96-1.65 1.97-2.24.99-.59 1.95-.88 2.88-.88s1.71.13 2.34.4l-1.2 2.93c-.4-.16-.96-.24-1.68-.24-1.15 0-2.13.45-3.01 1.36-.88.91-1.31 2.08-1.31 3.52v9.13zM49.23 116.18c-2.53 0-4.58-.85-6.15-2.53s-2.37-3.81-2.37-6.37c0-2.42.77-4.53 2.29-6.29 1.55-1.76 3.49-2.64 5.89-2.64 2.48 0 4.45.8 5.94 2.42 1.49 1.63 2.24 3.78 2.24 6.47l-.03.59H43.85c.08 1.68.67 3.01 1.68 4 1.04.99 2.24 1.47 3.62 1.47 2.24 0 3.78-.96 4.58-2.88l2.8 1.17c-.53 1.31-1.44 2.37-2.69 3.25-1.25.89-2.8 1.34-4.61 1.34zm4.51-10.92c-.08-.96-.51-1.87-1.31-2.72-.8-.85-2-1.31-3.6-1.31-1.17 0-2.16.37-3.01 1.09-.85.72-1.44 1.71-1.76 2.93l9.68.01zM68.1 116.18c-1.28 0-2.42-.27-3.44-.83-1.01-.53-1.76-1.23-2.26-2.05h-.13v2.32h-3.01v-24.4h3.14v7.7l-.13 2.32h.13c.51-.83 1.25-1.49 2.26-2.05 1.01-.53 2.16-.83 3.44-.83 2.16 0 4.02.85 5.6 2.56 1.57 1.71 2.34 3.81 2.34 6.34s-.77 4.64-2.34 6.34c-1.58 1.73-3.44 2.58-5.6 2.58zm-.54-2.87c1.47 0 2.72-.56 3.76-1.65 1.04-1.09 1.57-2.56 1.57-4.37s-.53-3.28-1.57-4.37c-1.04-1.09-2.29-1.65-3.76-1.65s-2.74.53-3.76 1.63c-1.01 1.09-1.55 2.56-1.55 4.4 0 1.84.51 3.3 1.55 4.4 1.05 1.07 2.3 1.61 3.76 1.61zM83.84 116.18c-1.79 0-3.25-.51-4.45-1.55-1.2-1.01-1.79-2.37-1.79-4.05 0-1.81.69-3.25 2.1-4.29 1.41-1.04 3.14-1.55 5.22-1.55 1.84 0 3.36.35 4.53 1.01v-.48c0-1.23-.43-2.21-1.25-2.96-.85-.75-1.87-1.12-3.09-1.12-.91 0-1.73.21-2.48.64-.75.43-1.25 1.01-1.52 1.79l-2.88-1.23c.4-1.01 1.15-1.92 2.29-2.77 1.15-.85 2.64-1.28 4.5-1.28 2.13 0 3.92.61 5.33 1.87 1.41 1.25 2.1 3.01 2.1 5.28v10.12h-3.01v-2.32h-.13c-1.23 1.93-3.07 2.89-5.47 2.89zm.51-2.87c1.31 0 2.48-.48 3.52-1.44 1.07-.96 1.6-2.1 1.6-3.44-.88-.72-2.21-1.09-4-1.09-1.52 0-2.66.32-3.44.99-.77.67-1.17 1.44-1.17 2.32 0 .83.35 1.47 1.07 1.95.71.47 1.51.71 2.42.71zM101.19 116.18c-1.87 0-3.41-.45-4.61-1.36a7.894 7.894 0 01-2.66-3.41l2.8-1.17c.88 2.1 2.4 3.14 4.53 3.14.99 0 1.79-.21 2.4-.64.61-.43.93-1.01.93-1.71 0-1.09-.77-1.84-2.29-2.21L98.9 108c-1.07-.27-2.08-.8-3.04-1.55-.96-.77-1.44-1.79-1.44-3.09 0-1.47.67-2.66 1.97-3.6 1.31-.93 2.85-1.39 4.66-1.39 1.47 0 2.8.35 3.94 1.01 1.17.67 2 1.63 2.48 2.88l-2.72 1.12c-.61-1.47-1.89-2.21-3.81-2.21-.93 0-1.71.19-2.34.59-.64.4-.96.91-.96 1.57 0 .96.75 1.6 2.21 1.95l3.3.77c1.57.37 2.72.99 3.49 1.87.75.88 1.12 1.89 1.12 3.01 0 1.49-.61 2.74-1.84 3.76-1.21 1.01-2.79 1.49-4.73 1.49zM117.58 116.18c-2.53 0-4.58-.85-6.15-2.53-1.57-1.68-2.37-3.81-2.37-6.37 0-2.42.77-4.53 2.29-6.29 1.55-1.76 3.49-2.64 5.89-2.64 2.48 0 4.45.8 5.94 2.42 1.49 1.63 2.24 3.78 2.24 6.47l-.03.59H112.2c.08 1.68.67 3.01 1.68 4 1.04.99 2.24 1.47 3.62 1.47 2.24 0 3.78-.96 4.58-2.88l2.8 1.17c-.53 1.31-1.44 2.37-2.69 3.25-1.26.89-2.8 1.34-4.61 1.34zm4.5-10.92c-.08-.96-.51-1.87-1.31-2.72-.8-.85-2-1.31-3.6-1.31-1.17 0-2.16.37-3.01 1.09-.85.72-1.44 1.71-1.76 2.93l9.68.01zM39.25 59.42l7.69-49.28c.27-1.68 2.52-2.08 3.31-.57l8.26 15.47-19.26 34.38zm54.67 11.97L86.58 26c-.22-1.41-1.99-1.99-3.01-.97L37.35 71.39l25.59 14.36c1.59.88 3.58.88 5.17 0l25.81-14.36zM73.14 31.8l-5.92-11.27c-.66-1.28-2.47-1.28-3.14 0l-26.03 46.4L73.14 31.8z"></path>
      </g>
    </svg>
  );
}

export function SupabaseIcon() {
  return (
    <svg
      width="256px"
      height="263px"
      viewBox="0 0 256 263"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      className="w-6 h-6"
    >
      <defs>
        <linearGradient
          x1="20.8617445%"
          y1="20.6868812%"
          x2="63.4256086%"
          y2="44.0710077%"
          id="supabase-linearGradient-1"
        >
          <stop stopColor="#249361" offset="0%"></stop>
          <stop stopColor="#3ECF8E" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="1.99116498%"
          y1="-13.1584008%"
          x2="21.4025077%"
          y2="34.708062%"
          id="supabase-linearGradient-2"
        >
          <stop stopColor="#000000" offset="0%"></stop>
          <stop stopColor="#000000" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g>
        <path
          d="M149.601512,258.578826 C142.884085,267.038157 129.263882,262.403261 129.102024,251.601817 L126.735244,93.6176533 L232.963622,93.6176533 C252.204429,93.6176533 262.935398,115.840956 250.971119,130.909887 L149.601512,258.578826 Z"
          fill="url(#supabase-linearGradient-1)"
        ></path>
        <path
          d="M149.601512,258.578826 C142.884085,267.038157 129.263882,262.403261 129.102024,251.601817 L126.735244,93.6176533 L232.963622,93.6176533 C252.204429,93.6176533 262.935398,115.840956 250.971119,130.909887 L149.601512,258.578826 Z"
          fillOpacity="0.2"
          fill="url(#supabase-linearGradient-2)"
        ></path>
        <path
          d="M106.399023,4.36908575 C113.11645,-4.09118439 126.736889,0.544432392 126.898746,11.3460249 L127.935901,169.329953 L23.0369844,169.329953 C3.79559007,169.329953 -6.93568494,147.106651 5.02918175,132.037719 L106.399023,4.36908575 Z"
          fill="#3ECF8E"
        ></path>
      </g>
    </svg>
  );
}

export function CssIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-6 h-6">
      <path
        fill="#1572B6"
        d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
      ></path>
      <path
        fill="#33A9DC"
        d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
      ></path>
      <path
        fill="#fff"
        d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
      ></path>
      <path
        fill="#EBEBEB"
        d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
      ></path>
      <path
        fill="#fff"
        d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
      ></path>
      <path
        fill="#EBEBEB"
        d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
      ></path>
    </svg>
  );
}

export function HtmlIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-6 h-6">
      <path
        fill="#E44D26"
        d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
      ></path>
      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
      <path
        fill="#EBEBEB"
        d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
      ></path>
      <path
        fill="#fff"
        d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
      ></path>
    </svg>
  );
}

export function GitIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-6 h-6">
      <path
        fill="#F34F29"
        d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
      ></path>
    </svg>
  );
}

// --------------------------- COURSES ---------------------------//

export function FelipeIcon() {
  return (
    <div className="h-8 w-8 bg-white rounded-full ring-1 ring-orangeDark">
      <Image
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
        width={100}
        height={100}
        quality={100}
        className={`w-full h-full rounded-full`}
        src={Me}
        alt="Felipe, desenvolvedor frontend dono do portfólio e deste projeto"
      />
    </div>
  );
}

export function PracticumIcon() {
  return (
    <svg
      className="w-8 h-8 bg-white rounded-full ring-1 ring-orangeDark"
      viewBox="0 0 200.000000 200.000000"
    >
      <g
        transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M890 1919 c-41 -5 -113 -20 -160 -35 -166 -51 -280 -124 -406 -256
        -276 -293 -327 -730 -127 -1088 67 -119 224 -276 343 -343 520 -291 1165 -37
        1343 528 139 441 -74 920 -495 1114 -99 46 -174 67 -288 81 -94 11 -103 11
        -210 -1z m390 -494 l0 -75 -225 0 -225 0 0 -190 0 -190 225 0 225 0 0 -80 0
        -80 -225 0 -225 0 -2 -182 -3 -183 -72 -3 -73 -3 0 531 0 530 300 0 300 0 0
        -75z m190 -265 l0 -170 -70 0 -70 0 0 170 0 170 70 0 70 0 0 -170z"
        />
      </g>
    </svg>
  );
}

export function UdemyIcon() {
  return (
    <svg
      className="w-8 h-8 bg-white rounded-full ring-1 ring-orangeDark"
      viewBox="0 0 300.000000 168.000000"
    >
      <g
        transform="translate(0.000000,168.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M1295 1540 l-200 -119 -3 -122 -3 -122 23 15 c13 8 105 63 205 122
        l183 106 172 -101 c95 -56 188 -110 206 -121 l32 -20 0 120 0 120 -206 121
        c-113 67 -207 121 -207 120 -1 0 -92 -54 -202 -119z"
        />
        <path
          d="M1090 963 c0 -5 0 -153 0 -331 0 -294 2 -328 20 -374 28 -73 65 -122
        123 -162 85 -58 127 -69 262 -70 102 0 128 3 178 23 112 44 193 128 224 229
        15 49 18 102 18 372 l0 315 -107 3 -108 3 0 -289 c0 -305 -3 -330 -48 -391
        -65 -88 -222 -93 -299 -10 -50 55 -53 78 -53 394 l0 295 -105 0 c-58 0 -105
        -3 -105 -7z"
        />
      </g>
    </svg>
  );
}

export function GitHubIcon({ className }: any) {
  return <BsGithub className={className ?? "w-6 h-6 text-white"} />;
}

export function LinkedinIcon({ className }: any) {
  return <BsLinkedin className={className ?? "w-6 h-6 text-blueLight"} />;
}
