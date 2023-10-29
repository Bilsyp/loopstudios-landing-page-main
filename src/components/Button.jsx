const Button = ({ custom }) => {
  return (
    <button
      className={`${custom} uppercase   block px-16  font-Alata border-2 rounded-sm text-xl  hover:bg-Black hover:text-white duration-150 tracking-[6px] border-VeryDarkGray py-2`}
    >
      see all
    </button>
  );
};

export default Button;
