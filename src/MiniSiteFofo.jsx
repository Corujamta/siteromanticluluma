import { useEffect, useMemo, useState } from "react";
import { Heart, Sparkles, Music4, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MiniSiteFofo() {
    const startDate = useMemo(() => new Date("2026-02-11T00:37:00"), []);
    const [now, setNow] = useState(new Date());
    const [playing, setPlaying] = useState(false);
    const [openLetter, setOpenLetter] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const diffMs = Math.max(0, now - startDate);
    const totalSeconds = Math.floor(diffMs / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const toggleMusic = () => {
        const audio = document.getElementById("romantic-audio");
        if (!audio) return;

        if (playing) {
            audio.pause();
            setPlaying(false);
        } else {
            audio.play();
            setPlaying(true);
        }
    };

    return (
        <div className="page">
            <audio id="romantic-audio" loop>
                <source src="/musica.mp3" type="audio/mpeg" />
            </audio>

            <div className="floating-hearts">
                {[...Array(18)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="heart-item"
                        initial={{ y: "110vh", opacity: 0.2, scale: 0.7 }}
                        animate={{ y: "-10vh", opacity: [0.2, 0.8, 0.2], scale: [0.7, 1, 0.8] }}
                        transition={{
                            duration: 8 + (i % 5),
                            repeat: Infinity,
                            delay: i * 0.35,
                            ease: "easeInOut",
                        }}
                        style={{ left: `${5 + i * 5}%` }}
                    >
                        <Heart size={24} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="card"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="tag"
                    animate={{ scale: [1, 1.08, 1], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <Sparkles size={16} />
                    <span>um cantinho pra gente</span>
                    <Sparkles size={16} />
                </motion.div>

                <h1>É muito bom te conhecer sua chatinha 💖</h1>

                <p className="intro">
                    Desde que conheci ocê, tudo ficou mais bonito, mais leve e
                    mais engraçado. Algo rapido que se tornou uma alegria ao ver sua mensagem.
                </p>

                <div className="buttons">
                    <button onClick={toggleMusic} className="main-button">
                        <Music4 size={18} />
                        {playing ? "Pausar música" : "Tocar música"}
                    </button>

                </div>

                <div className="timer-box">
                    <p className="timer-title">contando desde 11/02/2026 às 00:37</p>

                    <div className="timer-grid">
                        <div className="timer-item">
                            <strong>{String(days).padStart(2, "0")}</strong>
                            <span>Dias</span>
                        </div>
                        <div className="timer-item">
                            <strong>{String(hours).padStart(2, "0")}</strong>
                            <span>Horas</span>
                        </div>
                        <div className="timer-item">
                            <strong>{String(minutes).padStart(2, "0")}</strong>
                            <span>Minutos</span>
                        </div>
                        <div className="timer-item">
                            <strong>{String(seconds).padStart(2, "0")}</strong>
                            <span>Segundos</span>
                        </div>
                    </div>
                </div>

                <div className="photo-box">
                    <img src="/foto.jpg" alt="Foto especial" />
                    <p>Uma lembrança sobre hamburguer com gosto de plastico KKKKK ✨</p>
                </div>

                <div className="message-grid">
                    <div className="message-card">
                        <h3>Você fez diferença.</h3>
                        <p>
                            Em tão pouco tempo, você conseguiu deixar lembranças boas demais,
                            sorrisos sinceros e um carinho que cresce a cada dia.
                        </p>
                    </div>

                    <div className="message-card">
                        <h3>E eu amo isso.</h3>
                        <p>
                            Amo a forma como tudo parece mais bonito quando penso em você.
                            Esse contador não marca só tempo: ele marca momentos com ocê.
                        </p>
                    </div>
                </div>

                <div className="final-box">
                    <p className="final-title">
                        Obrigado por existir e por tornar tudo mais especial. 🌷✨
                    </p>
                </div>
            </motion.div>

            <AnimatePresence>
                {openLetter && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpenLetter(false)}
                    >
                        <motion.div
                            className="letter-modal"
                            initial={{ scale: 0.8, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 30 }}
                            transition={{ duration: 0.35 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={() => setOpenLetter(false)}>
                                <X size={18} />
                            </button>

                            <div className="letter-content">
                                <img src="/foto.jpg" alt="Nossa foto" className="letter-photo" />

                                <h2>Uma cartinha para você 💌</h2>

                                <p>
                                    Desde que você entrou na minha vida, tudo ganhou um brilho mais
                                    bonito. Os dias ficaram mais leves, os sorrisos mais sinceros e
                                    o coração encontrou mais motivos para bater feliz.
                                </p>

                                <p>
                                    Cada momento ao seu lado se transforma em uma lembrança que eu
                                    quero guardar com carinho. Você é daquelas pessoas que fazem o
                                    mundo parecer mais calmo, mais doce e muito mais especial.
                                </p>

                                <p>
                                    Esse cantinho é só uma forma simples de mostrar o quanto é bom
                                    ter te conhecido e o quanto cada segundo desde então tem sido
                                    importante para mim. 💖
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}