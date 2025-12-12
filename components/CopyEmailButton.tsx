import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyEmailButtonProps {
    email?: string;
    variant?: 'light' | 'dark';
    label?: string;
    className?: string;
}

const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
    email = "contato@andantecultura.com.br",
    variant = 'dark',
    label = "Fale conosco pelo e-mail:",
    className = ""
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const isLight = variant === 'light';

    // Light variant: for dark text on light bg (e.g. white cards)
    // Dark variant: for light text on dark bg (e.g. footers)

    const containerStyle = isLight
        ? "bg-stone-100 hover:bg-stone-200 border-stone-200 hover:border-terracotta-500/50 shadow-md"
        : "bg-white/5 hover:bg-white/10 border-white/10 hover:border-terracotta-500/50 shadow-lg hover:shadow-terracotta-900/20";

    const codeClass = isLight
        ? "text-stone-700 group-hover:text-stone-900"
        : "text-stone-200 group-hover:text-white";

    const labelClass = isLight ? "text-stone-500" : "text-stone-400";
    const copyBadgeStyle = isLight
        ? "text-stone-400 group-hover:text-terracotta-600 bg-white"
        : "text-stone-500 group-hover:text-terracotta-400 bg-black/20";

    return (
        <div className={`flex flex-col items-center animate-fade-in ${className}`}>
            {label && <span className={`${labelClass} text-sm mb-4 font-medium`}>{label}</span>}
            <button
                onClick={handleCopy}
                className={`group flex items-center gap-3 px-6 py-4 rounded-full border transition-all duration-300 cursor-pointer ${containerStyle}`}
                title="Copiar e-mail"
            >
                <code className={`font-mono text-lg transition-colors ${codeClass}`}>
                    {email}
                </code>
                {copied ? (
                    <span className="flex items-center text-green-500 text-xs font-bold px-2">
                        <Check className="w-4 h-4 mr-1" /> Copiado!
                    </span>
                ) : (
                    <span className={`flex items-center text-xs transition-colors uppercase tracking-widest px-3 py-1 rounded ${copyBadgeStyle}`}>
                        <Copy className="w-4 h-4 mr-1" /> Copiar
                    </span>
                )}
            </button>
        </div>
    );
};

export default CopyEmailButton;
