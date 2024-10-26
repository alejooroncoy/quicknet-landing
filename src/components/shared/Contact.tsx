import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contacto-empresa" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Contactar Empresa
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Hablemos sobre cómo podemos ayudarte
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestro equipo de expertos está listo para analizar tus
              necesidades y brindarte una solución a medida. Completa el
              formulario de contacto y nos comunicaremos contigo a la brevedad.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md">
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" placeholder="Ingresa tu nombre" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje"
                  className="min-h-[100px]"
                />
              </div>
              <Button type="submit">Enviar</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
