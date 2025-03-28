import type { FC } from "react"

interface PortfolioFallbackProps {
  title: string
  bgColor?: string
  textColor?: string
}

const PortfolioFallback: FC<PortfolioFallbackProps> = ({
  title,
  bgColor = "bg-gray-800",
  textColor = "text-white",
}) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${bgColor} static`}>
      <div className="text-center p-4">
        <div className="text-blue-500 text-4xl mb-2">iam</div>
        <div className={`${textColor} text-lg font-light`}>{title}</div>
      </div>
    </div>
  )
}

export default PortfolioFallback

