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
      <Path d="M19.91,3.11v-.44c0-.47-.13-.91-.34-1.29-.23-.39-.55-.72-.94-.94-.38-.22-.82-.34-1.29-.34H2.67c-.47,0-.91,.13-1.29,.34-.39,.23-.72,.55-.94,.94-.22,.38-.34,.82-.34,1.29v14.66c0,.47,.13,.91,.34,1.29,.23,.39,.55,.72,.94,.94,.38,.22,.82,.34,1.29,.34h14.66c.47,0,.91-.13,1.29-.34,.39-.23,.72-.55,.94-.94,.22-.38,.34-.82,.34-1.29V8.71H11.88l-.94,.47,1.63,.82,2.58,1.29h2.18v5.24l-.08-.04-1.82-.91-.48-.24L4.26,10l4.15-2.08,6.54-3.27,.48-.24,1.82-.91,.08-.04v2.22c.35,0,.69-.07,1-.2h0s.29-.15,.29-.15h0c.77-.44,1.29-1.28,1.29-2.23Zm-6.75,14.21H3.96c-.71,0-1.29-.58-1.29-1.29v-3.96l1.23,.62,9.25,4.63ZM5.54,6.48l-2.87,1.43V3.96c0-.71,.58-1.29,1.29-1.29H13.16l-7.62,3.81Z" />
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
