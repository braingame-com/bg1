import Svg, { Path } from "react-native-svg";
import { useColorScheme } from "react-native";

export const IconBrainGame = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill={useColorScheme() === "dark" ? "white" : "black"}
      viewBox="0 0 503.36 503.36"
      {...props}
    >
      <Path d="m452.67 101.2-.05 37.3c50.74-25.95 50.74-56.56 50.74-56.56V50.57c0-13.98-5.67-26.63-14.83-35.79C479.82 6.07 467.95.52 454.78 0H44.21C32 0 20.95 4.95 12.94 12.95 4.95 20.95 0 32 0 44.21v408.52c0 27.75 22.32 50.28 49.98 50.62h405.84c26.52-1.59 47.54-23.6 47.54-50.52V226.31H250.77l101.58 50.73h100.27v140.73c.02.4.02.81.02 1.22s0 .82-.02 1.22a33.543 33.543 0 0 1-4.02 14.81l-33.18-16.57-27.16-13.56-136.73-68.27-170.09-84.93L388.36 98.55l27.23-13.58 33.13-16.53c2.4 4.45 3.81 9.51 3.98 14.88 0 .35.02.7.02 1.05 0 .38 0 .75-.02 1.12l-.02 15.71Zm-82 351.53H83.5c-18.23-.47-32.86-15.39-32.86-33.72V292.86l320.03 159.87ZM50.64 210.81V84.37c0-9.32 3.78-17.75 9.88-23.85 6.11-6.11 14.53-9.89 23.85-9.89h286.81L50.64 210.81Z" />
    </Svg>
  ),
  IconCode = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M12.316 3.051a1 1 0 0 1 .633 1.265l-4 12a1 1 0 1 1-1.898-.632l4-12a1 1 0 0 1 1.265-.633zM5.707 6.293a1 1 0 0 1 0 1.414L3.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0zm8.586 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 0 1 0-1.414z"
        clipRule="evenodd"
      />
    </Svg>
  ),
  IconHome = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"
      />
    </Svg>
  ),
  IconBookOpen = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
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
  IconShoppingBag = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
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
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
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
  IconArrowRightSmall = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 11H5a1 1 0 1 1 0-2h7.586l-2.293-2.293a1 1 0 0 1 0-1.414z"
        clipRule="evenodd"
      />
    </Svg>
  );
