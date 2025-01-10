-- Insert remaining feature content
INSERT INTO page_content (section_type, section_id, content_key, content_value) VALUES
('feature', 'interactive-briefs', 'title', 'Interactive Project Briefs'),
('feature', 'interactive-briefs', 'description', 'Create detailed project briefs with custom fields, file attachments, and automated workflows. Keep everyone aligned from day one.'),
('feature', 'seamless-payments', 'title', 'Seamless Payment Collection'),
('feature', 'seamless-payments', 'description', 'Get paid faster with automated invoicing, milestone payments, and integrated payment processing. No more chasing clients for payments.'),
('feature', 'client-management', 'title', 'Client Management Hub'),
('feature', 'client-management', 'description', 'Manage all your client relationships in one place. Track communications, deadlines, and deliverables with ease.'),
('feature', 'client-portals', 'title', 'Branded Client Portals'),
('feature', 'client-portals', 'description', 'Give clients a professional, branded experience with custom portals for project updates, approvals, and file sharing.'),
('feature', 'team-collaboration', 'title', 'Team Collaboration Tools'),
('feature', 'team-collaboration', 'description', 'Keep your team in sync with shared calendars, task assignments, and real-time project updates.'),
('feature', 'secure-media-storage', 'title', 'Secure Media Storage'),
('feature', 'secure-media-storage', 'description', 'Store and share your media files securely with unlimited cloud storage, version control, and granular permissions.');

-- Insert video URLs for each feature
INSERT INTO media_content (section_type, section_id, media_type, media_key, media_url) VALUES
('feature', 'interactive-briefs', 'video', 'preview', 'https://player.vimeo.com/video/1045720681?autoplay=1&loop=1&muted=1&background=1&quality=1080p'),
('feature', 'interactive-briefs', 'video', 'learn-more', 'https://player.vimeo.com/video/1043854759?autoplay=1'),
('feature', 'seamless-payments', 'video', 'preview', 'https://player.vimeo.com/video/1045720682?autoplay=1&loop=1&muted=1&background=1&quality=1080p'),
('feature', 'seamless-payments', 'video', 'learn-more', 'https://player.vimeo.com/video/1043854760?autoplay=1'),
('feature', 'client-management', 'video', 'preview', 'https://player.vimeo.com/video/1045720683?autoplay=1&loop=1&muted=1&background=1&quality=1080p'),
('feature', 'client-management', 'video', 'learn-more', 'https://player.vimeo.com/video/1043854761?autoplay=1'),
('feature', 'client-portals', 'video', 'preview', 'https://player.vimeo.com/video/1045720684?autoplay=1&loop=1&muted=1&background=1&quality=1080p'),
('feature', 'client-portals', 'video', 'learn-more', 'https://player.vimeo.com/video/1043854762?autoplay=1'),
('feature', 'team-collaboration', 'video', 'preview', 'https://player.vimeo.com/video/1045720685?autoplay=1&loop=1&muted=1&background=1&quality=1080p'),
('feature', 'team-collaboration', 'video', 'learn-more', 'https://player.vimeo.com/video/1043854763?autoplay=1'),
('feature', 'secure-media-storage', 'video', 'preview', 'https://player.vimeo.com/video/1045720686?autoplay=1&loop=1&muted=1&background=1&quality=1080p'),
('feature', 'secure-media-storage', 'video', 'learn-more', 'https://player.vimeo.com/video/1043854764?autoplay=1');