import asyncio
import re
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        # Wider default timeout to match the agent's DOM-stability budget;
        # auto-waiting Playwright APIs (expect, locator.wait_for) inherit this.
        context.set_default_timeout(15000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> navigate
        await page.goto("http://localhost:3000")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Click the 'Apply for Diagnostic' button to open the Growth Friction Index diagnostic.
        # Apply for Diagnostic button
        elem = page.locator('[id="hero-cta-primary"]')
        await elem.click(timeout=10000)
        
        # -> Scroll to the Live Diagnostic question area and reveal the available option buttons so the first diagnostic input ('How is your acquisition data routed to your sales or conversion team?') can be selected.
        await page.mouse.wheel(0, 300)
        
        # -> Click the 'Real-time algorithmic routing based on behavioral intent.' option to answer the first diagnostic question and advance to the visibility question.
        # C Real-time algorithmic routing based on... button
        elem = page.get_by_role('button', name='C Real-time algorithmic routing based on behavioral intent.', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Exact LTV mapped to the originating keyword and behavior.' option to answer the measurement question and advance the diagnostic.
        # C Exact LTV mapped to the originating keyword and... button
        elem = page.get_by_role('button', name='C Exact LTV mapped to the originating keyword and behavior.', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Automated multi-channel re-engagement triggered by behavioral signals.' option to answer the current diagnostic question and advance to the next step.
        # C Automated multi-channel re-engagement triggered... button
        elem = page.get_by_role('button', name='C Automated multi-channel re-engagement triggered by behavioral signals.', exact=True)
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> Verify the EBITDA Yield result is displayed
        # Assert: EBITDA Yield label is visible on the page.
        await expect(page.locator("xpath=/html/body/main").nth(0)).to_contain_text("EBITDA Yield", timeout=15000), "EBITDA Yield label is visible on the page."
        # Assert: The numeric EBITDA Yield result (0.9) is visible on the page.
        await expect(page.locator("xpath=/html/body/main").nth(0)).to_contain_text("0.9", timeout=15000), "The numeric EBITDA Yield result (0.9) is visible on the page."
        current_url = await page.evaluate("() => window.location.href")
        # Assert: page loaded with a URL (final outcome verified by the AI judge during the run)
        assert current_url, 'Page should have loaded with a URL'
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    