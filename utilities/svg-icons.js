import Svg, { Path } from "react-native-svg";
import { useColorScheme } from "react-native";

export const IconBG = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#777777"
      viewBox="0 0 20 20"
      {...props}
    >
      <Path
        d="M17.99 4.02V5.5C20 4.47 20 3.25 20 3.25V2c0-.56-.23-1.06-.59-1.42-.35-.35-.82-.57-1.34-.59H1.76C1.27-.01.84.19.52.5.2.83 0 1.27 0 1.76v16.23c0 1.1.89 2 1.99 2.01h16.12c1.05-.06 1.89-.94 1.89-2.01v-9H9.96L14 11.01h3.98V16.7c0 .21-.06.41-.16.59l-1.32-.66-1.08-.54-5.43-2.71-6.76-3.37 12.2-6.09 1.08-.54 1.32-.66c.1.18.15.38.16.59v.7Zm-3.26 13.97H3.32c-.72-.02-1.31-.61-1.31-1.34v-5.01l12.72 6.35ZM2.01 8.38V3.35c0-.37.15-.71.39-.95.24-.24.58-.39.95-.39h11.4L2.01 8.38Z"
        style={{
          fill: "#777777",
        }}
      />
    </Svg>
  ),
  IconCode = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="#777777"
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M12.316 3.051a1 1 0 0 1 .633 1.265l-4 12a1 1 0 1 1-1.898-.632l4-12a1 1 0 0 1 1.265-.633zM5.707 6.293a1 1 0 0 1 0 1.414L3.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0zm8.586 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 0 1 0-1.414z"
        clipRule="evenodd"
      />
    </Svg>
  ),
  IconPie = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="#777777"
      strokeWidth={2}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 3.055A9.001 9.001 0 1 0 20.945 13H11V3.055z"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.488 9H15V3.512A9.025 9.025 0 0 1 20.488 9z"
      />
    </Svg>
  ),
  IconBook = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="#777777"
      strokeWidth={2}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </Svg>
  ),
  IconPlay = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="#777777"
      strokeWidth={2}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.752 11.168-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664z"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
      />
    </Svg>
  ),
  IconBag = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="#777777"
      strokeWidth={2}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </Svg>
  ),
  IconCog = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="#777777"
      strokeWidth={2}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
      />
    </Svg>
  ),
  IconArrow = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="#777777"
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 11H5a1 1 0 1 1 0-2h7.586l-2.293-2.293a1 1 0 0 1 0-1.414z"
        clipRule="evenodd"
      />
    </Svg>
  );
