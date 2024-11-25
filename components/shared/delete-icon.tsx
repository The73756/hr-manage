interface DeleteIconProps {
  className?: string;
}

export const DeleteIcon = ({ className }: DeleteIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className={className}
    >
      <g clip-path="url(#clip0_6_85)">
        <path
          d="M4.50006 21.8333C4.50006 23.3067 5.69337 24.5 7.16675 24.5H17.8334C19.3067 24.5 20.5001 23.3067 20.5001 21.8333V5.83331H4.50006V21.8333ZM17.1667 1.83331L15.8334 0.5H9.16675L7.83337 1.83331H3.16675V4.5H21.8334V1.83331H17.1667Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_85">
          <rect
            width="24"
            height="24"
            fill="currentColor"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
