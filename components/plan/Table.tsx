import { CheckIcon } from '@heroicons/react/outline'
import { Product } from '@stripe/firestore-stripe-payments'

interface Props {
  products: Product[]
  selectedPlan: Product | null
}

function Table({ products, selectedPlan }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={product.id}
            >
              USD{` ${product.prices[0].unit_amount! / 100}.00`}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Create Notes</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.CreateNotes === "true" && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Present Notes</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.PresentNotes === "true" && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">{`HelpDesk & Email Support`}</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.HelpDeskSupport === "true" && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Notes Limits</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.Limites === "true" && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Invite friends to collaborate</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.Collaboration === "true" && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table