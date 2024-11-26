export const EmployeeInfo = () => {
  return (
    <div className="flex flex-wrap justify-between gap-8 mb-16 md:mb-32">
      <h1 className="font-semibold text-2xl text-blue sm:text-3xl">
        Иванов Иван Иванович
      </h1>
      <div className="items-center gap-x-2 gap-y-2 sm:gap-x-5 grid grid-cols-2 w-full sm:w-[420px] text-blue-light">
        <p className="max-sm:text-sm">Электронная почта</p>
        <p className="font-bold sm:text-xl">i@mail.ru</p>
        <p className="max-sm:text-sm">Телефон</p>
        <p className="font-bold sm:text-xl">+7 999 999 99 99</p>
        <p className="max-sm:text-sm">Ставка (руб./час)</p>
        <p className="font-bold sm:text-xl">700</p>
      </div>
    </div>
  );
};
