import { Text } from "@util/texts/Text";
import { Button } from "@util/buttons/Button";
import { useState } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";

interface CookieMessageProps {
  acceptCookie: () => void;
}

export function CookieMessage({ acceptCookie }: CookieMessageProps) {
  const [isVisible, setIsVisible] = useState(false);

  const showMore = () => setIsVisible((isVisible) => !isVisible);

  const teste = isVisible ? "-bottom-28 opacity-0" : "bottom-0 opacity-100";
  const showingMore = isVisible
    ? "-bottom-0 opacity-100"
    : "bottom-0 opacity-0";
  const rotateIcon = isVisible ? "rotate-180" : "rotate-0";

  return (
    <div className="fixed inset-0 bg-dark/75 z-[100] overflow-hidden">
      <div className={`absolute transition-all duration-300 ${showingMore}`}>
        <div className="bg-orangeDark rounded-full w-10 h-10 absolute right-10 -z-50 -top-4 flex justify-center items-top">
          <div onClick={showMore} className="flex justify-center items-top">
            {
              <BsChevronDoubleUp
                className={`text-white transition-all duration-300 ${rotateIcon}`}
              />
            }
          </div>
        </div>
        <div className="bg-white rounded-t-xl border-2 border-orangeDark w-fit h-fit z-50 right-10 px-4 py-10">
          <div className="w-1/2 text-center m-auto">
            <Text className="text-orangeDark text-xs lg:text-base">
              Os cookies deste portfólio servem para gerenciar os vistos por
              último sem a necessidade de uma autenticação, estando assim o
              usuário totalmente protegido. As informações salvas estão inclusas
              apenas o id de visitante que cada usuário recebe ao acessar o
              site, sua confirmação de acesso aos cookies e, conforme uso,
              informações de quais projetos foram acessados e a data data de
              acesso.
            </Text>
          </div>
        </div>
      </div>
      <div
        className={`bg-white border-t-2 border-orangeDark p-4 w-screen h-fit absolute z-50 ${teste} animate-showCookie rounded-t-xl`}
      >
        <div className="w-1/2 text-center m-auto">
          <Text className="text-orangeDark text-xs lg:text-base">
            Este portfolio utiliza cookies para melhorar sua experiência de
            navegação e personalizar o conteúdo exibido sem a necessidade de
            autenticação. Ao continuar navegando, você concorda com o uso de
            cookies.
          </Text>
        </div>
        <div className="flex gap-4 w-fit m-auto py-4">
          <Button text="Aceitar cookie" onClick={acceptCookie} />
          <Button text="Saiba mais..." onClick={showMore} />
        </div>
      </div>
    </div>
  );
}
