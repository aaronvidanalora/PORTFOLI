import { Contacto } from "./Contacto";
import { Redes } from "./Redes";

/* eslint-disable react/no-unescaped-entities */
export function Footer() {
    return (
        <div className="bg-customGray text-white">
            <div className="justify-center">
                    <Contacto />
                    <Redes />
            </div>
        </div>
    );
}
