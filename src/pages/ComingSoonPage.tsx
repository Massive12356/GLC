import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Clock, Mail, Heart } from 'lucide-react';

// ----------------------------------------------------------------------
// CONFIG: Change the launch date here.
// Example: new Date('2026-07-01T09:00:00Z')
// Defaults to 30 days from the first time the file is evaluated.
// ----------------------------------------------------------------------
const LAUNCH_DATE = new Date(
  new Date().getTime() + 30 * 24 * 60 * 60 * 1000
);

const LOGO_URL =
  'https://res.cloudinary.com/dsk62cvbs/image/upload/v1779126323/GLC_ms1rrt.png';

// Background slideshow images (cycled every BG_INTERVAL ms)
const BG_IMAGES = [
  'https://res.cloudinary.com/dsk62cvbs/image/upload/v1779233012/IMG_0720_tb4chf.jpg',
  'https://res.cloudinary.com/dsk62cvbs/image/upload/v1779233012/IMG_0528_ftj8lj.jpg',
];
const BG_INTERVAL = 6000;

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (target: Date): TimeLeft => {
  const diff = target.getTime() - new Date().getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n: number) => n.toString().padStart(2, '0');

const ComingSoonPage = () => {
  const target = useMemo(() => LAUNCH_DATE, []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(target)
  );
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  // Rotate background images on a timer
  useEffect(() => {
    const id = window.setInterval(() => {
      setBgIndex((i) => (i + 1) % BG_IMAGES.length);
    }, BG_INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  // Preload images so the swipe transition feels instant
  useEffect(() => {
    BG_IMAGES.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || 'Could not subscribe. Please try again.');
      }

      setSubmitted(true);
      setEmail('');
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Could not subscribe. Please try again.';
      setErrorMsg(message);
    } finally {
      setSubmitting(false);
    }
  };

  const timeBoxes: { label: string; value: number }[] = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <>
      <Helmet>
        <title>Coming Soon | Generational Life Changers</title>
        <meta
          name="description"
          content="Generational Life Changers is launching soon. Stay tuned for our new website."
        />
      </Helmet>

      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a5f3f] via-[#462501] to-[#2e1801] text-white">
        {/* Background image slideshow (swipe + subtle Ken-Burns zoom) */}
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={bgIndex}
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BG_IMAGES[bgIndex]})` }}
            initial={{ opacity: 0, scale: 1.08, x: '6%' }}
            animate={{ opacity: 1, scale: 1, x: '0%' }}
            exit={{ opacity: 0, scale: 1.04, x: '-6%' }}
            transition={{
              opacity: { duration: 1.4, ease: 'easeInOut' },
              scale: { duration: 6, ease: 'linear' },
              x: { duration: 1.6, ease: [0.4, 0, 0.2, 1] },
            }}
          />
        </AnimatePresence>

        {/* Dark gradient overlay for readability */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1a5f3f]/80 via-[#462501]/80 to-[#2e1801]/90"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black/30"
        />

        {/* Animated blurred orbs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#84cc16]/25 blur-3xl"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating sparkles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 71) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="h-4 w-4 text-accent-light/70" />
          </motion.div>
        ))}

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1, 1.12, 1],
                boxShadow: [
                  '0 0 0 0 rgba(132, 204, 22, 0.55)',
                  '0 0 0 14px rgba(132, 204, 22, 0)',
                  '0 0 0 0 rgba(132, 204, 22, 0.55)',
                  '0 0 0 18px rgba(132, 204, 22, 0)',
                  '0 0 0 0 rgba(132, 204, 22, 0)',
                ],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: 'easeInOut',
                times: [0, 0.2, 0.4, 0.6, 1],
              }}
              className="rounded-full bg-white p-5 ring-4 ring-white/40 shadow-2xl"
            >
              <img
                src={LOGO_URL}
                alt="Generational Life Changers"
                className="h-24 w-24 object-contain md:h-32 md:w-32"
              />
            </motion.div>
          </motion.div>

          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur-md md:text-sm"
          >
            <Clock className="h-3.5 w-3.5" />
            Launching Soon
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="mb-4 bg-gradient-to-r from-white via-accent-light to-white bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl lg:text-7xl"
          >
            Generational Life Changers
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12 max-w-2xl text-base text-white/80 md:text-lg"
          >
            Something meaningful is on the way. We are crafting a brand new
            experience to help us change lives across generations. Stay tuned.
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
            className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5"
          >
            {timeBoxes.map((box) => (
              <div
                key={box.label}
                className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md sm:px-7 sm:py-5"
              >
                <motion.div
                  key={box.value}
                  initial={{ y: -16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="text-3xl font-bold tabular-nums tracking-tight sm:text-5xl"
                >
                  {pad(box.value)}
                </motion.div>
                <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
                  {box.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Email signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="w-full max-w-md"
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
                  <input
                    type="email"
                    required
                    disabled={submitting}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to get notified"
                    className="w-full rounded-full border border-white/20 bg-white/10 py-3 pl-11 pr-4 text-sm text-white placeholder-white/60 backdrop-blur-md outline-none transition focus:border-accent-light focus:bg-white/15 disabled:opacity-60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:scale-[1.03] hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                  <Heart className="h-4 w-4" />
                  {submitting ? 'Sending…' : 'Notify Me'}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-full border border-accent-light/40 bg-accent/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-md"
              >
                Thank you! We will let you know the moment we launch.
              </motion.div>
            )}
            {errorMsg && !submitted && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-xs text-red-300"
              >
                {errorMsg}
              </motion.p>
            )}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-xs text-white/50"
          >
            &copy; {new Date().getFullYear()} Generational Life Changers. All
            rights reserved.
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPage;
