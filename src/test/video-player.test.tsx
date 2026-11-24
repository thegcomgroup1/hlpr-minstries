import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { VideoPlayer } from "@/components/landing/VideoPlayer";

describe("video playback", () => {
  it("does not load or autoplay a video before the visitor presses play", () => {
    const { container } = render(<VideoPlayer id="yM1bvu2uPrQ" title="Church video" />);
    expect(container.querySelector("iframe")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Play video: Church video" }));
    expect(container.querySelector("iframe")).not.toBeNull();
  });

  it("limits end-of-video recommendations with rel=0", () => {
    render(<VideoPlayer id="yM1bvu2uPrQ" title="Recommendations test" />);
    fireEvent.click(screen.getByRole("button", { name: "Play video: Recommendations test" }));
    const frame = screen.getByTitle("Recommendations test");
    const src = frame.getAttribute("src");
    expect(src).toBeTruthy();
    expect(new URL(src ?? "").searchParams.get("rel")).toBe("0");
  });
});