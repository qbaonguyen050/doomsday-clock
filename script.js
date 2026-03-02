document.addEventListener('DOMContentLoaded', () => {
    const hand = document.getElementById('hand');

    // 50 seconds to midnight means the hand is at 50/60 * 360 degrees = 300 degrees from the 12 o'clock position
    // Or if we consider 0 degrees as midnight, 50 seconds before is -50 * 6 degrees/sec = -300 degrees
    // Actually, 11:59:10 PM means the second hand is at 10 seconds.
    // The Doomsday Clock usually just has one hand (the minute hand) approaching midnight.
    // If it's 50 seconds to midnight, the minute hand is at 59 minutes and 10 seconds.

    // For a visual representation, let's rotate the hand to 300 degrees (where 360 is midnight)
    // 50 seconds to go: 360 - (50 / 60 * 360) / 60 ... no.

    // If 1 minute (60 seconds) = 360 degrees on the clock face for the 'countdown' hand.
    // 50 seconds left means it has 50/60 of a circle left to go?
    // Usually Doomsday clock shows the last few minutes.

    // Let's say 0 degrees is midnight.
    // 50 seconds to midnight = - (50 / 60) * 360 / 12 ? No, that's too small.
    // Let's use 360 degrees as a full hour for the visual hand.
    // 50 seconds to midnight = - (50 / 3600) * 360 = -5 degrees.

    // Actually, the Bulletin of the Atomic Scientists' clock shows the minute hand very close to 12.
    // 50 seconds = 50/60 of a minute.
    // If the whole clock face represents 1 hour (60 minutes),
    // then 50 seconds = (50/3600) * 360 degrees = 5 degrees before 12.

    // However, to make it more dramatic, often the Doomsday clock is shown such that the
    // entire visible range is just the last few minutes.

    // Let's stick to a standard clock representation but make it look right.
    // 50 seconds to midnight:
    // Rotate - (50 / 60) * 6 = -5 degrees? No, 1 second = 6 degrees. 50 seconds = 300 degrees.
    // Position at 10 seconds: 10 * 6 = 60 degrees.

    // If 12:00 is 0 degrees.
    // 50 seconds to 12:00 means the hand is at - (50/60 * 6) degrees = -5 degrees if the whole clock is 1 minute?
    // No, if the whole clock is 60 minutes, then 1 minute = 6 degrees.
    // 50 seconds = 5/6 of a minute = 5 degrees.
    // So 360 - 5 = 355 degrees.

    const targetRotation = 360 - (50 / 60) * 6; // This would be for a 60-minute clock face

    // Let's make it more visually obvious. Let's assume the clock face represents 15 minutes.
    // Then 50 seconds is a larger angle.
    // 15 minutes = 360 degrees. 1 minute = 24 degrees. 50 seconds = (50/60) * 24 = 20 degrees.
    // Rotation = 360 - 20 = 340 degrees.

    const rotation = 340;

    // Apply rotation with a slight delay for effect
    setTimeout(() => {
        hand.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
    }, 500);

    // Subtle jitter to the hand to simulate tension
    setInterval(() => {
        const jitter = (Math.random() - 0.5) * 0.5;
        hand.style.transform = `translateX(-50%) rotate(${rotation + jitter}deg)`;
    }, 100);
});
