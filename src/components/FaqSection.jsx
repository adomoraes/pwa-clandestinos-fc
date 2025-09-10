import React from 'react';

const faqs = [
  {
    question: 'Qual o prazo de entrega?',
    answer: 'O prazo de entrega é de 5 a 10 dias úteis após a confirmação do pagamento.',
  },
  {
    question: 'Como posso rastrear meu pedido?',
    answer: 'Você receberá um código de rastreio por e-mail assim que o pedido for enviado.',
  },
  {
    question: 'Qual a política de troca e devolução?',
    answer: 'Você tem até 7 dias após o recebimento para solicitar a troca ou devolução do produto.',
  },
];

function FaqSection() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Perguntas Frequentes
        </h2>
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-clandestinos-yellow">{faq.question}</h3>
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
