-- Update the type check constraint to include 'fixed_bottom'
ALTER TABLE kmong_1_contact_submissions 
DROP CONSTRAINT IF EXISTS kmong_1_contact_submissions_type_check;

ALTER TABLE kmong_1_contact_submissions 
ADD CONSTRAINT kmong_1_contact_submissions_type_check 
CHECK (type IN ('full_form', 'quick_contact', 'fixed_bottom'));