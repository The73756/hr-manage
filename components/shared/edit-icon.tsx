interface EditIconProps {
  className?: string;
}

export const EditIcon = ({ className }: EditIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_6_63)">
        <path
          d="M15.3212 4.53116L2.11616 17.7372C2.04966 17.8039 2.00227 17.8872 1.97893 17.9784L0.515227 23.8533C0.493699 23.9404 0.495018 24.0317 0.519057 24.1182C0.543095 24.2048 0.589041 24.2836 0.652455 24.3472C0.749859 24.4443 0.881739 24.4988 1.01926 24.499C1.06168 24.4989 1.10394 24.4937 1.14508 24.4834L7.01993 23.0195C7.11128 22.9965 7.19466 22.9491 7.26115 22.8824L20.4674 9.67727L15.3212 4.53116ZM23.7389 2.73052L22.2689 1.26063C21.2865 0.278197 19.5742 0.279172 18.5929 1.26063L16.7923 3.06126L21.9383 8.20718L23.7389 6.40659C24.2296 5.91606 24.4999 5.2631 24.4999 4.56868C24.4999 3.87425 24.2296 3.2213 23.7389 2.73052Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_63">
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
